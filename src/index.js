import fs from 'fs';
import path from 'path';
import parse from './parses.js';

const extractFormat = (filePath) => path.extname(filePath);
//const getData = filePath;
const fullPath = (filepath) => path.resolve(process.cwd(), filepath);
//const flpt = '/mnt/c/study/projects/1/frontend-project-46/src/testFile.json';

const getData = (filepath) => {
  const patch = fullPath(filepath);
  return parse(fs.readFileSync(patch), extractFormat(filepath));
};

const gendiff = (filepath1, filepath2) => {
  const makeObject1 = getData(filepath1);
  const makeObject2 = getData(filepath2);
  const arrayJson1 = Object.entries(makeObject1).map(([key, value]) => ({
    key,
    value,
  }));
  const arrayJson2 = Object.entries(makeObject2).map(([key, value]) => ({
    key,
    value,
  }));
  const result = [];

  const compareObjects = (obj1, obj2, depth = 0) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    keys1.forEach((key) => {
      if (keys2.includes(key)) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 === 'object' && typeof value2 === 'object') {
          const nestedDiff = compareObjects(value1, value2, depth + 1);
          if (nestedDiff !== '') {
            result.push(`${' '.repeat(depth * 2)}  ${key}: ${nestedDiff}`);
          }
        } else if (value1 !== value2) {
          result.push(`${' '.repeat(depth * 2)}- ${key}: ${JSON.stringify(value1)}`);
          result.push(`${' '.repeat(depth * 2)}+ ${key}: ${JSON.stringify(value2)}`);
        }
      } else {
        result.push(`${' '.repeat(depth * 2)}- ${key}: ${JSON.stringify(obj1[key])}`);
      }
    });

    keys2.forEach((key) => {
      if (!keys1.includes(key)) {
        result.push(`${'-'.repeat(depth * 2)}+ ${key}: ${JSON.stringify(obj2[key])}`);
      }
    });
  };

  compareObjects(makeObject1, makeObject2);

  result.sort();

  const resultToString = result.join('\n');
  return resultToString;
};

export default gendiff;
