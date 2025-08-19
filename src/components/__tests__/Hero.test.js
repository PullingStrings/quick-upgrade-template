/* eslint-env node */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = readFileSync(join(__dirname, '../Hero.jsx'), 'utf8');
if (!content.includes('config.heroImage')) {
  throw new Error('Hero component missing heroImage usage');
}
console.log('Hero heroImage test passed');
