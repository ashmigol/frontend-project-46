import _ from 'lodash';

const buildTree = (Object1, Object2) => {
  const keys1 = _.keys(Object1);
  const keys2 = _.keys(Object2);
  const commonKeys = _.sortBy(_.union(keys1, keys2));

  return commonKeys.map((key) => {
    if (!_.has(Object1, key)) {
      return { key, status: 'added', value: Object2[key] };
    }
    if (!_.has(Object2, key)) {
      return { key, status: 'deleted', value: Object1[key] };
    }
    if (_.isPlainObject(Object1[key]) && _.isPlainObject(Object2[key])) {
      return { key, status: 'nested', children: buildTree(Object1[key], Object2[key]) };
    }
    if (!_.isEqual(Object1[key], Object2[key])) {
      return {
        key, status: 'changed', value1: Object1[key], value2: Object2[key],
      };
    }
    return { key, status: 'unchanged', value: Object1[key] };
  });
};

export default buildTree;
