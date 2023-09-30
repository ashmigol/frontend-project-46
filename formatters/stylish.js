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

const formatDiffTree = (diffTree, depth = 1) => {
  const indentSize = depth * 4;
  const currentIndent = ' '.repeat(indentSize);
  const lastIndent = ' '.repeat(indentSize - 4);

  const diffLines = diffTree.map((node) => {
    const { key, type, value } = node;

    if (type === 'nested') {
      const nestedLines = formatDiffTree(value, depth + 1);
      return `${currentIndent}${key}: {\n${nestedLines}\n${lastIndent}}`;
    }

    if (type === 'added') {
      return `${currentIndent}+ ${key}: ${stringify(value, ' ', 2, depth)}`;
    }

    if (type === 'deleted') {
      return `${currentIndent}- ${key}: ${stringify(value, ' ', 2, depth)}`;
    }

    if (type === 'changed') {
      const oldValue = stringify(value.oldValue, ' ', 2, depth);
      const newValue = stringify(value.newValue, ' ', 2, depth);
      return `${currentIndent}- ${key}: ${oldValue}\n${currentIndent}+ ${key}: ${newValue}`;
    }

    return `${currentIndent}  ${key}: ${stringify(value, ' ', 2, depth)}`;
  });

  return diffLines.join('\n');
};

export default function stylish(diffTree) {
  return `{\n${formatDiffTree(diffTree)}\n}`;
}
//const result = stringify(testObject);
//console.log(result);
