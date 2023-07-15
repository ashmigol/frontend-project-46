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

  for (let i = 0; i < arrayJson1.length; i += 1) {
    if (
      arrayJson2.some(
        (obj) =>
          obj.key === arrayJson1[i].key && obj.value === arrayJson1[i].value
      )
    ) {
      result.push(`  ${arrayJson1[i].key}: ${arrayJson1[i].value}`);
    } else {
      result.push(`- ${arrayJson1[i].key}: ${arrayJson1[i].value}`);
    }
  }

  for (let j = 0; j < arrayJson2.length; j += 1) {
    if (
      !arrayJson1.some(
        (obj) =>
          obj.key === arrayJson2[j].key && obj.value === arrayJson2[j].value
      )
    ) {
      result.push(`+ ${arrayJson2[j].key}: ${arrayJson2[j].value}`);
    }
  }

  result.sort((str1, str2) => {
    const char1 = str1[2]; // Получить третий символ первой строки
    const char2 = str2[2];

    if (char1 < char2) {
      return -1; // str1 должна быть перед str2
    }
  });

  const resultToString = result.join('\n');
  return resultToString;
};

export default gendiff;
