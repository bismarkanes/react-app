import * as types from '../constants' ;

/*
 * Set global progress.isLoading to true
 */
export const progressStartAction = (params) => {
  return {
    type: types.PROGRESS_START,
    params,
  };
};

/*
 * Set global progress.isLoading to false
 */
export const progressEndAction = (payload) => {
  return {
    type: types.PROGRESS_END,
    payload,
  };
};
