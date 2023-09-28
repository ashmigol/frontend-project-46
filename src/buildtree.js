// Функция для построения дерева отличий между двумя объектами
const buildDiffTree = (obj1, obj2, depth = 0) => {
    let result = []; // Массив для хранения различий
  
    const keys1 = Object.keys(obj1).sort(); // Получаем ключи из первого объекта
    const keys2 = Object.keys(obj2).sort(); // Получаем ключи из второго объекта
  
    // Проходим по каждому ключу в первом объекте
    keys1.forEach((key) => {
      if (keys2.includes(key)) {
        const value1 = obj1[key]; // Значение ключа в первом объекте
        const value2 = obj2[key]; // Значение ключа во втором объекте
  
        // Если оба значения являются объектами, мы рекурсивно сравниваем их
        if (typeof value1 === "object" && typeof value2 === "object") {
          const nestedDiff = buildDiffTree(value1, value2, depth + 1); // Рекурсивно строим дерево отличий для вложенных объектов
          // Если есть различия, добавляем их в результат
          if (nestedDiff.length > 0) {
            result.push(`${" ".repeat(depth * 2)}${key}:`); // Добавляем ключ в результат
            result.push(...nestedDiff); // Добавляем различия в результат
          }
        } else if (value1 !== value2) {
          // Если значения различаются, добавляем оба значения в результат
          result.push(`${" ".repeat(depth * 2)}- ${key}: ${JSON.stringify(value1)}`); // Удаленное значение
          result.push(`${" ".repeat(depth * 2)}+ ${key}: ${JSON.stringify(value2)}`); // Добавленное значение
        }
      } else {
        // Если ключ присутствует только в первом объекте, добавляем его в результат
        result.push(`${" ".repeat(depth * 2)} ${key}: ${JSON.stringify(obj1[key])}`);
      }
    });
  
    // Проходим по каждому ключу во втором объекте
    keys2.forEach((key) => {
      // Если ключ присутствует только во втором объекте, добавляем его в результат
      if (!keys1.includes(key)) {
        result.push(`${"-".repeat(depth * 2)}+ ${key}: ${JSON.stringify(obj2[key])}`);
      }
    });
  
    return result; // Возвращаем дерево отличий
  };
  
  export default buildDiffTree;