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
  ['file1.json', 'file2.json', 'stylish', expectedStylish],
  ['file1.yaml', 'file2.yml', 'stylish', expectedStylish],
  ['file1.json', 'file2.json', 'plain', expectedPlain],
  ['file1.json', 'file2.json', 'json', expectedJson],
])('comparison', (file1, file2, format, expected) => {
  test(`compare ${file1} and ${file2} in ${format} format`, () => {
    expect(genDiff(getFixturePath(file1), getFixturePath(file2), format)).toEqual(expected);
  });
});

test('the presence of an error', () => {
  const file2 = getFixturePath('file2.yml');
  const file3 = getFixturePath('file2.txt');
  const errorMessage = 'Unsupported file format: \'.txt\'! Try another format.';
  expect(() => genDiff(file2, file3)).toThrow(new Error(errorMessage));
});
