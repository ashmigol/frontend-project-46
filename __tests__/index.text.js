import genDiff from '../src/index.js';

import fs from 'fs';
import path from 'path';

test('genDiff', () => {
  expect(
    genDiff('/mnt/f/study/frontend-project-46/__fixtures__/testFile.json', '/mnt/f/study/frontend-project-46/__fixtures__/testFile2.json')
  ).toEqual(fs.readFileSync('/mnt/f/study/frontend-project-46/__fixtures__/testResultIndex', 'utf8'));

  expect(genDiff('/mnt/f/study/frontend-project-46/__fixtures__/file1.yaml', '/mnt/f/study/frontend-project-46/__fixtures__/file2.yaml')).toEqual(
    fs.readFileSync('/mnt/f/study/frontend-project-46/__fixtures__/testResultIndex', 'utf8')
  );

  expect(genDiff('/mnt/f/study/frontend-project-46/__fixtures__/file.py', '/mnt/f/study/frontend-project-46/__fixtures__/file2.yaml')).toEqual(
    fs.readFileSync('/mnt/f/study/frontend-project-46/__fixtures__/testResultUnsupp', 'utf8')
  );
});
