import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const day = process.argv[2];

if (!day) {
  console.error('Please provide a day number, e.g., node createDay.js 02');
  process.exit(1);
}

const dir = path.join(__dirname, `../solutions/day${day.padStart(2, '0')}`);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'solution.js'), '// Solution goes here\n');
  fs.writeFileSync(path.join(dir, 'solution.test.js'), '// Test cases go here\n');
  fs.writeFileSync(path.join(dir, 'input.txt'), '// Input goes here\n');
  fs.writeFileSync(path.join(dir, 'prompt.md'), '// Prompt goes here\n');
  console.log(`Day ${day} created in solutions/`);
} else {
  console.error(`Day ${day} already exists in solutions/`);
}