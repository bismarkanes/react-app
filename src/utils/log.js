export const consoleLog = (params) => {
  if (process.env.NODE_ENV !== 'production'){
    console.log(params);
  }
};
