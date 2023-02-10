export const infiniteScrollSelect = (e) => {
  try {
    let space = 2;
    let left = Math.round(e.nativeEvent.target.offsetHeight + e.nativeEvent.target.scrollTop) + space;
    let right = e.nativeEvent.target.scrollHeight;
    if (left >= right){
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const clientPagination = (masterData, page, pageSizeCustom) => {
  let pageSize = 10;
  if (pageSizeCustom){
    pageSize = pageSizeCustom;
  }
  --page;
  let data = masterData.slice(page * pageSize, (page + 1) * pageSize);
  return data;
};

export const groupBy = (OurArray, property) => {
  return OurArray.reduce(function (accumulator, object) {
    // get the value of our object(age in our case) to use for group    the array as the array key
    const key = object[property];
    // if the current value is similar to the key(age) don't accumulate the transformed array and leave it empty
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    // add the value to the array
    accumulator[key].push(object);
    // return the transformed array
    return accumulator;
    // Also we also set the initial value of reduce() to an empty object
  }, {});
};