import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const expectedStylish = readFile('correct_stylish.txt');
const expectedPlain = readFile('correct_plain.txt');
const expectedJson = readFile('correct_json.txt');

describe.each([
  ['stylish', expectedStylish],
  ['plain', expectedPlain],
  ['json', expectedJson],
])('format: %s', (format, expected) => {
  test.each([
    ['file1.json', 'file2.json'],
    ['file1.yaml', 'file2.yml'],
    ['file1.json', 'file2.json'],
    ['file1.json', 'file2.json'],
  ])('compare files in %s format', (file1, file2) => {
    test(`compare ${file1} and ${file2} in ${format} format`, () => {
      expect(genDiff(getFixturePath(file1), getFixturePath(file2), format)).toEqual(expected);
    });
  });
});

  test('the presence of an error', () => {
    const filepath2 = getFixturePath('file2.yml');
    const filepath3 = getFixturePath('file2.txt');

    expect(() => genDiff(filepath2, filepath3)).toThrow(new Error('Unsupported file format: \'.txt\'! Try another format.'));
  });
