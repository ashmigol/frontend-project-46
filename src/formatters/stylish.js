import _ from 'lodash';

const indent = (depth, isFull = false) => {
  if (isFull) {
    return ' '.repeat(4 * depth).slice(2);
  }
  return ' '.repeat(4 * depth);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const output = Object.entries(data).map(([key, value]) => `${indent(depth + 1)}${key}: ${stringify(value, depth + 1)}`);

  return `{\n${output.flat().join('\n')}\n${indent(depth)}}`;
};

const getStylish = (tree, depth = 1) => {
  const result = tree.map((node) => {
    switch (node.status) {
      case 'added':
        return `${indent(depth, true)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'deleted':
        return `${indent(depth, true)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'unchanged':
        return `${indent(depth, true)}  ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return `${indent(depth, true)}- ${node.key}: ${stringify(node.value1, depth)}\n${indent(depth, true)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      case 'nested':
        return `${indent(depth, true)}  ${node.key}: {\n${getStylish(node.children, depth + 1)}\n${indent(depth)}}`;
      default:
        throw new Error(`Unknown node status: ${node.status}`);
    }
  }).flat().join('\n');
  
  return `${result}`;
};

export default getStylish;
