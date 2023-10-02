import genDiff from '../src/index.js';

import fs from 'fs';
import path from 'path';

test('genDiff', () => {
  expect(
    genDiff('../__fixtures__/testFile.json', '../__fixtures__/testFile2.json')
  ).toEqual(fs.readFileSync('../__fixtures__/testResultIndex', 'utf8'));

  expect(genDiff('../__fixtures__/file1.yaml', '../__fixtures__/file2.yaml')).toEqual(
    fs.readFileSync('../__fixtures__/testResultIndex', 'utf8')
  );

  expect(genDiff('../__fixtures__/file.py', '../__fixtures__/file2.yaml')).toEqual(
    fs.readFileSync('../__fixtures__/testResultIndex', 'utf8')
  );
});
