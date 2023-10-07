import _ from 'lodash';
const buildTree = (Object1, Object2) => {


const result = [];

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
const sortedResult = _.sortBy(result, 'key');
return sortedResult;
};

export default buildTree
