export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => ({
    ...obj,
    [item[key]]: item,
  }), initialValue);
};

export const findObjectsByKeys = (arrayKey, targetObj) => {
  const initialValue = [];
  return arrayKey.reduce((arrayObj, key) => [...arrayObj, targetObj[key]], initialValue);
};


export const errorSelector = (error) => error.response.data.message.message || error.response.data.message;

export const isBrowser = typeof window === 'object';
