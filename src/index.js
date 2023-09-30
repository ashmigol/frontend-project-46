import _ from 'lodash';
import fs from "fs";
import path from "path";
import parse from './parses.js';

const gendiff = (filePath1, filePath2) => {
  let result = '';
  const data1 = fs.readFileSync(filePath1, 'utf-8');
  const data2 = fs.readFileSync(filePath2, 'utf-8');
  const parsedFile1 = parse(data1, filePath1);
  const parsedFile2 = parse(data2, filePath2);
  const keys1 = _.keys(parsedFile1);
  const keys2 = _.keys(parsedFile2);
  const commonUniqKeys = _.union(keys1, keys2).sort();

  commonUniqKeys.forEach(key => {
    if (parsedFile1[key] === parsedFile2[key]) {
      result += `  ${key}: ${parsedFile1[key]}\n`; // Добавил пробелы перед ключами и использовал формат "ключ: значение"
    } else if (keys1.includes(key) && keys2.includes(key)) {
      result += `- ${key}: ${parsedFile1[key]}\n`; // Добавил пробел и знак "-" перед ключами и использовал формат "ключ: значение"
      result += `+ ${key}: ${parsedFile2[key]}\n`; // Добавил пробел и знак "+" перед ключами и использовал формат "ключ: значение"
    } else if (keys1.includes(key)) {
      result += `- ${key}: ${parsedFile1[key]}\n`; // Добавил пробел и знак "-" перед ключами и использовал формат "ключ: значение"
    } else if (keys2.includes(key)) {
      result += `+ ${key}: ${parsedFile2[key]}\n`; // Добавил пробел и знак "+" перед ключами и использовал формат "ключ: значение"
    }
  });

  //console.log(keys1);

  return `{\n${result}}`; 
}

export default gendiff