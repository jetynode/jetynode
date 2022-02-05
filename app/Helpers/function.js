//Cehck all values of array is string ot not
module.exports.isArrValuesString = (x) => {
  return x.every((i) => typeof i === "string");
};
