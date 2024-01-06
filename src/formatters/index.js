import getStylish from './stylish.js';
import getPlain from './plain.js';

const getReport = (data, format) => {
  switch (format) {
    case 'stylish':
      return `{\n${getStylish(data)}\n}`;
    case 'plain':
      return getPlain(data);
    case 'json':
      return JSON.stringify(data, null, 0);
    default:
      throw new Error(`Invalid format: '${format}'! Use a different format.`);
  }
};

export default getReport;
