import _ from 'lodash';

const Object1 = {
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
};

const Object2 = {
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
};


//статусы изменен, не изменен. добвылен, удален, вложен

const buildTree = (Object1, Object2) => {


const keys1 = _.keys(Object1);
const keys2 = _.keys(Object2);
const commonKeys = _.sortBy(_.union(keys1, keys2));

return commonKeys.map((key) => {
  if (!_.has(Object1, key)) {
    return { key, satus: 'added', value: Object2[key] };
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



console.log(buildTree(Object1, Object2));