import _ from 'lodash';

const getPlain = (tree, parent) => {
    return tree.map((node) => {
      switch(node.status) {
        case 'added':
          return `Property '${node.key}' was added with value ${node.value}`;
        case 'deleted':
          return `Property '${node.key}' was removed`;
        // case 'unchanged':
        //   return `${indent(depth, true)}  ${node.key}: ${stringify(node.value, depth)}`;
        case 'changed':
          return `${indent(depth, true)}- ${node.key}: ${stringify(node.value1, depth)}\n${indent(depth, true)}+ ${node.key}: ${stringify(node.value2, depth)}`;
        case 'nested':
          return `${indent(depth, true)}  ${node.key}: {\n${stylish(node.children, depth + 1)}\n${indent(depth)}}`;
      }
    }).flat().join('\n');
  };
  
  export default getPlain;