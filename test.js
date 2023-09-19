import _ from 'lodash';
const data = {
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
};

const object = {
  key: 'value',
  key2: 'value2',
};


const fill = (startObj, arr, data) => {
  let result = {};
  
  if (arr.length === 0) {
    result = Object.assign(startObj, data);
  };
  // for (const key in arr) {
  //   if (data.hasOwnProperty(key)) {
  //     result[key];
  //   }
  // }

  result = Object.assign(startObj, _.pick(data, arr));
  return result;
}


console.log(fill(object, [], data));

