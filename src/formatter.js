const formatDiffTree = (diffTree) => {
    let result = ""; // Результирующая строка
  
    const formatNode = (node, depth) => {
      const indent = " ".repeat(depth * 2); // Пробелы для отступа
  
      if (Array.isArray(node)) {
        // Если узел является массивом, рекурсивно форматируем каждый элемент
        node.forEach((item) => {
          result += formatNode(item, depth);
        });
      } else if (typeof node === "object") {
        // Если узел является объектом, сортируем ключи по алфавиту
        const sortedKeys = Object.keys(node).sort();
  
        sortedKeys.forEach((key) => {
          const value = node[key];
          result += `${indent}${key}: ${value}\n`; // Добавляем отформатированный ключ и значение в результат
  
          // Рекурсивно форматируем вложенные узлы
          formatNode(value, depth + 1);
        });
      } else {
        // Если узел является строкой или другим примитивным значением, добавляем его в результирующую строку с соответствующим форматированием
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