import fs from "fs";
import path from "path";
import parse from "./parses.js";
import buildDiffTree from './buildtree.js'
import formatDiffTree from './formatter.js';

const extractFormat = (filePath) => path.extname(filePath);
//const getData = filePath;
const fullPath = (filepath) => path.resolve(process.cwd(), filepath);
//const flpt = '/mnt/c/study/projects/1/frontend-project-46/src/testFile.json';

const getData = (filepath) => {
  const patch = fullPath(filepath);
  return parse(fs.readFileSync(patch), extractFormat(filepath));
};

const gendiff = (filepath1, filepath2) => {
  const makeObject1 = getData(filepath1);
  const makeObject2 = getData(filepath2);


  const diffTree = buildDiffTree(makeObject1, makeObject2);
  const formattedDiff = formatDiffTree(diffTree);

  return formattedDiff;
};


export default gendiff;
