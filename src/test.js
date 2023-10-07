const Object1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  };
const Object2 = {
    "timeout": 20,
    "verbose": true,
    "host": "hexlet.io"
  };
const result = [];
//статусы изменен, не изменен. добвылен, удален, вложен

for (let key in Object1) {
    if (Object2[key] && Object1[key] === Object2[key]) {
        const newObj = { key, value: Object1[key], status: "unchanged" };
        result.push(newObj);
    }
    else if (!Object2[key]) {
        const newObj = { key, value: Object1[key], status: "deleted" };
        result.push(newObj);
    }
    else if (Object1[key] !== Object2[key]) {
        const newObj = { key, value: Object1[key], status: "changed" };
        result.push(newObj);
    }
  };
  
  for (let key in Object2) {
  
    if (!Object1[key]) {
        const newObj = { key, value: Object2[key], status: "added" };
        result.push(newObj);
    }
    else if (!Object2[key]) {
        const newObj = { key, value: Object1[key], status: "deleted" };
        result.push(newObj);
    }
    else if (Object1[key] !== Object2[key]) {
        const newObj = { key, value: Object2[key], status: "changedInSecondObject" };
        result.push(newObj);
    }
  };




console.log(result);