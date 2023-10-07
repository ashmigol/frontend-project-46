const stylish = (tree) => {
  let result = '';
    result = tree.map((node) => {
      switch(node.status) {
        case 'added':
          return ` + ${node.key}: ${node.value}`;
        case 'deleted':
          return ` - ${node.key}: ${node.value}`;
        case 'unchanged':
          return `   ${node.key}: ${node.value}`;
        case 'changed':
          return ` - ${node.key}: ${node.value}`;
        case 'changedInSecondObject':
          return ` + ${node.key}: ${node.value}`;
      }
    }).join('\n');
  
  return `{\n${result}\n}`;
}

export default stylish;