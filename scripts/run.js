const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const isWin = process.platform === 'win32';
const nextExecutable = isWin ? 'next.cmd' : 'next';
const localBinCmd = path.join(root, 'node_modules', '.bin', nextExecutable);

const cmd = process.argv[2] || 'dev';
const args = [cmd, ...process.argv.slice(3)];

const env = Object.assign({}, process.env);
const pathKey = Object.keys(env).find(k => k.toLowerCase() === 'path') || 'PATH';
const pathSep = path.delimiter;

const filteredPath = env[pathKey]
  ? env[pathKey]
      .split(pathSep)
      .filter(p => !p.toLowerCase().includes('appdata\\roaming\\npm'))
      .join(pathSep)
  : '';

env[pathKey] = `${path.join(root, 'node_modules', '.bin')}${pathSep}${filteredPath}`;

const res = spawnSync(isWin ? `"${localBinCmd}"` : localBinCmd, args, {
  stdio: 'inherit',
  cwd: root,
  env,
  shell: true,
});

process.exit(res.status || 0);
