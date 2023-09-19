import _ from 'lodash';

const indent = (depth = 1, nested = false) => {
  if (isFull) {
    return ''.repeat(depth * 4).slice(2);
  }
  return ''.repeat(depth * 4);
};

const stringify = (value, replacer = '.', count = 4, depth = 1) => {
  const indentSize = depth * count;
  const currentIndent = replacer.repeat(indentSize);
  const lastIndent = replacer.repeat(indentSize - count);

  if (!_.isObject(value)) {
    return String(value);
  }

  const properties = Object.entries(value).map(
    ([key, value]) =>
      `${currentIndent}${key}: ${stringify(value, replacer, count, depth + 1)}`
  );
  return `{\n${properties.join('\n')}\n${lastIndent}}`;
};

export default stringify;

const testObject = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
  hobbies: ['reading', 'swimming', 'coding'],
  details: {
    occupation: 'Software Engineer',
    experience: 5,
  },
};

//const result = stringify(testObject);
//console.log(result);
