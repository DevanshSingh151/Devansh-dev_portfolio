const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const localBinCmd = path.join(rootDir, 'node_modules', '.bin', 'next.cmd');

if (!fs.existsSync(localBinCmd)) {
  console.log('Rebuilding node_modules bin links...');
  execFileSync(`"${path.join(rootDir, 'node_modules', '.bin', 'npm.cmd')}"`, ['rebuild'], { shell: true, stdio: 'inherit', cwd: rootDir });
}

console.log('Executing local next.cmd dev via quoted execFileSync...');
try {
  execFileSync(`"${localBinCmd}"`, ['dev'], {
    shell: true,
    stdio: 'inherit',
    cwd: rootDir,
  });
} catch (error) {
  process.exit(1);
}
