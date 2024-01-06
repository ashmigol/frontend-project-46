import yaml from 'js-yaml';

const parseFile = (data, filePath) => {
  switch (filePath) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unsupported file format: '.${fileExtension}'! Try another format.`);
  }
};

export default parseFile;
