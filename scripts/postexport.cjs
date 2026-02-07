const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('Expected out/ directory to exist. Run `next build` first.');
  process.exit(1);
}

const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

console.log('postexport: ensured out/.nojekyll exists');
