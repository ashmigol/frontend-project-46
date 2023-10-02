import parseFile from '../src/parses.js';
import fs from 'fs';
import yaml from 'js-yaml';

test('parseFile', () => {
    const filePath = '../__fixtures__/testFile.json';
    const expectedJsonData = fs.readFileSync('../__fixtures__/testResultParseJson', 'utf8');
    expect(parseFile(expectedJsonData, filePath)).toEqual(JSON.parse(expectedJsonData));
  
    const yamlFilePath = '../__fixtures__/file1.yaml';
    const expectedYamlData = fs.readFileSync('../__fixtures__/testResultParseYaml', 'utf8');
    expect(parseFile(expectedYamlData, yamlFilePath)).toEqual(yaml.load(expectedYamlData));
  });

test('should throw error for unsupported file format', () => {
  const unsupportedFilePath = '../__fixtures__/file.py';
  const unsupportedFileData = fs.readFileSync(unsupportedFilePath, 'utf8');
  expect(() => {
    parseFile(unsupportedFileData, unsupportedFilePath);
  }).toThrowError("Unsupported file format: 'py'! Try another format.");
});