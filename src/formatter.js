const formatDiffTree = (diffTree) => {
    let result = ""; // Результирующая строка
  
    const formatNode = (node, depth) => {
      const indent = " ".repeat(depth * 2); // Пробелы для отступа
  
      if (Array.isArray(node)) {
        // Если узел является массивом, рекурсивно форматируем каждый элемент
        node.forEach((item) => {
          result += formatNode(item, depth);
        });
      } else {
        // Если узел является строкой, добавляем его в результирующую строку с соответствующим форматированием
        result += `${indent}${node}\n`;
      }
    };
  
    // Форматируем каждый узел в дереве отличий
    diffTree.forEach((node) => {
      formatNode(node, 0);
    });
  
    return result;
  };
  
  export default formatDiffTree;