const fs = require('fs');
const filepath1 = '/mnt/c/study/projects/1/frontend-project-46/src/testFile.json';
const filepath2 = '/mnt/c/study/projects/1/frontend-project-46/src/testFile2.json';

const gendiff = (filepath1, filepath2) => {
  const fileData1 = fs.readFileSync(filepath1, 'utf-8');
  const json1 = JSON.parse(fileData1);
  const fileData2 = fs.readFileSync(filepath2, 'utf-8');
  const json2 = JSON.parse(fileData2);
  const arrayJson1 = Object.entries(json1).map(([key, value]) => ({key, value}));
  const arrayJson2 = Object.entries(json2).map(([key, value]) => ({key, value}));
  const result = [];
  
  for (let i = 0; i < arrayJson1.length; i += 1) {
    if (arrayJson2.some(obj => obj.key === arrayJson1[i].key && obj.value === arrayJson1[i].value)) {
      result.push(`  ${arrayJson1[i].key}: ${arrayJson1[i].value}`);
    } else {
      result.push(`- ${arrayJson1[i].key}: ${arrayJson1[i].value}`);
    }
  }

  for (let j = 0; j < arrayJson2.length; j += 1) {
    if (!arrayJson1.some(obj => obj.key === arrayJson2[j].key && obj.value === arrayJson2[j].value)) {
      result.push(`+ ${arrayJson2[j].key}: ${arrayJson2[j].value}`);
    }

};

result.sort((str1, str2) => {
    const char1 = str1[2]; 
    const char2 = str2[2]; 
  
    if (char1 < char2) {
      return -1; // str1 должна быть перед str2
    }
  });
 
const resultToString = result.join('\n');
console.log(resultToString);
};

gendiff(filepath1, filepath2);