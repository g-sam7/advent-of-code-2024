import fs from 'fs/promises';

export const readInput = async (filename) => {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    return data;
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
};