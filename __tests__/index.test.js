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

describe('comparison', () => {
  test('json1', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
  });

  test('yaml/yml', () => {
    const filepath1 = getFixturePath('file1.yaml');
    const filepath2 = getFixturePath('file2.yml');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
  });

  test('plain', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
  });

  test('json2', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson);
  });

  test('the presence of an error', () => {
    const filepath2 = getFixturePath('file2.yml');
    const filepath3 = getFixturePath('file2.txt');

    expect(() => genDiff(filepath2, filepath3)).toThrow(new Error('Unsupported file format: \'.txt\'! Try another format.'));
  });
});
