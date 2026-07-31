const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const localBinCmd = path.join(root, 'node_modules', '.bin', 'next.cmd');

const cmd = process.argv[2] || 'dev';
const args = [cmd, ...process.argv.slice(3)];

const env = Object.assign({}, process.env);
const pathKey = Object.keys(env).find(k => k.toLowerCase() === 'path') || 'PATH';
const filteredPath = env[pathKey]
  ? env[pathKey]
      .split(';')
      .filter(p => !p.toLowerCase().includes('appdata\\roaming\\npm'))
      .join(';')
  : '';

env[pathKey] = `${path.join(root, 'node_modules', '.bin')};${filteredPath}`;

const res = spawnSync(`"${localBinCmd}"`, args, {
  stdio: 'inherit',
  cwd: root,
  env,
  shell: true,
});

process.exit(res.status || 0);
