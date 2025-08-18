/* eslint-env node */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const content = readFileSync(join(__dirname, '../ConfigDialog.jsx'), 'utf8');
const labels = [
  'Site Title',
  'Primary Color',
  'Secondary Color',
  'About Text',
  'Services JSON',
  'Contact Email',
  'Contact Phone'
];
labels.forEach((label) => {
  if (!content.includes(label)) {
    throw new Error(`Missing label ${label}`);
  }
});
console.log('ConfigDialog labels test passed');
