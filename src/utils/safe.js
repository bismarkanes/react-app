// example getSafe(() => response.data.meta.total, 0)
export const getSafe = (fn, defaultVal) => {
  try {
    return fn();
  } catch (_e) {
    return defaultVal;
  }
};