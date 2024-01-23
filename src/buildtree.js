import _ from 'lodash';

const buildTree = (object1, object2) => {
  const keys1 = _.keys(object1);
  const keys2 = _.keys(object2);
  const commonKeys = _.sortBy(_.union(keys1, keys2));

  return commonKeys.map((key) => {
    if (!_.has(object1, key)) {
      return { key, status: 'added', value: object2[key] };
    }
    if (!_.has(object2, key)) {
      return { key, status: 'deleted', value: object1[key] };
    }
    if (_.isPlainObject(object1[key]) && _.isPlainObject(object2[key])) {
      return { key, status: 'nested', children: buildTree(object1[key], object2[key]) };
    }
    if (!_.isEqual(object1[key], object2[key])) {
      return {
        key, status: 'changed', value1: object1[key], value2: object2[key],
      };
    }
    return { key, status: 'unchanged', value: object1[key] };
  });
};

export default buildTree;
