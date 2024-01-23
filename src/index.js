import fs from 'fs';
import parse from './parser.js';
import buildTree from './buildtree.js';
import getReport from './formatters/index.js';

const getDataFromFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const fileType = filePath.split('.').slice(-1)[0];
  const parsedData = parse(data, fileType);
  return parsedData;
};

const getDiff = (filePath1, filePath2, format = 'stylish') => {
  const parsedFile1 = getDataFromFile(filePath1);
  const parsedFile2 = getDataFromFile(filePath2);
  const tree = buildTree(parsedFile1, parsedFile2);
  return getReport(tree, format);
};

export default getDiff;
