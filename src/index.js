import _ from 'lodash';
import fs from "fs";
import path from "path";
import parse from './parses.js';
import buildTree from './buildtree.js';
import stylish from '../formatters/stylish.js';

const gendiff = (filePath1, filePath2) => {
  const data1 = fs.readFileSync(filePath1, 'utf-8');
  const data2 = fs.readFileSync(filePath2, 'utf-8');
  const parsedFile1 = parse(data1, filePath1);
  const parsedFile2 = parse(data2, filePath2);
  const tree = buildTree(parsedFile1, parsedFile2);
  return `{\n${stylish(tree)}\n}`;
};

export default gendiff