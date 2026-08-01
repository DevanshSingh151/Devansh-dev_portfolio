const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const isWin = process.platform === 'win32';
const nextExecutable = isWin ? 'next.cmd' : 'next';
const localBinCmd = path.join(rootDir, 'node_modules', '.bin', nextExecutable);
const npmExecutable = isWin ? 'npm.cmd' : 'npm';

if (!fs.existsSync(localBinCmd)) {
  console.log('Rebuilding node_modules bin links...');
  execFileSync(isWin ? `"${path.join(rootDir, 'node_modules', '.bin', npmExecutable)}"` : npmExecutable, ['rebuild'], { shell: true, stdio: 'inherit', cwd: rootDir });
}

console.log('Executing local next build via execFileSync...');
try {
  execFileSync(isWin ? `"${localBinCmd}"` : localBinCmd, ['build'], {
    shell: true,
    stdio: 'inherit',
    cwd: rootDir,
  });
} catch (error) {
  process.exit(1);
}
