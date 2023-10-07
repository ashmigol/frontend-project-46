import parseFile from '../src/parses.js';
import fs from 'fs';
import yaml from 'js-yaml';


test('parseFile', () => {
    const filePath = '/mnt/f/study/frontend-project-46/__fixtures__/testFile.json';
    const expectedJsonData = fs.readFileSync('/mnt/f/study/frontend-project-46/__fixtures__/testResultParseJson', 'utf8');
    expect(parseFile(expectedJsonData, filePath)).toEqual(JSON.parse(expectedJsonData));
  
    const yamlFilePath = '/mnt/f/study/frontend-project-46/__fixtures__/file1.yaml';
    const expectedYamlData = fs.readFileSync('/mnt/f/study/frontend-project-46/__fixtures__/testResultParseYaml', 'utf8');
    expect(parseFile(expectedYamlData, yamlFilePath)).toEqual(yaml.load(expectedYamlData));
  });

test('should throw error for unsupported file format', () => {
  const unsupportedFilePath = '/mnt/f/study/frontend-project-46/__fixtures__/file.py';
  const unsupportedFileData = fs.readFileSync(unsupportedFilePath, 'utf8');
  expect(() => {    
    return parseFile(unsupportedFileData, unsupportedFilePath);
  }).toThrow(new Error("Unsupported file format: 'py'! Try another format."));
});