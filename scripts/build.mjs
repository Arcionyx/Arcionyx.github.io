import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'upgrade.css', 'app.js', 'gas-lab.js', 'content.js', 'profile.js', 'case-studies.js', 'assets', 'research', '.nojekyll']) {
  await cp(`${root}${file}`, new URL(file, output), { recursive: true });
}
console.log('Built static portfolio → dist/');
