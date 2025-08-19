/* eslint-env node */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = readFileSync(join(__dirname, '../Footer.jsx'), 'utf8');
if (!content.includes('bg-gray-900')) {
  throw new Error('Footer background class missing');
}
console.log('Footer background test passed');
