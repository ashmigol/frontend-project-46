import genDiff from '../src/index.js';

import fs from 'fs';
import path from 'path';

test('genDiff', () => {
  expect(
    genDiff('__fixtures__/testFile.json', '__fixtures__/testFile.json')
  ).toEqual(fs.readFileSync('./__fixtures__/testResultIndex', 'utf8'));
});
