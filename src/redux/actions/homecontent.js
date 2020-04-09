import { HOME_CONTENT_REQUEST, HOME_CONTENT_SUCCESS, } from '../constants' ;

export const getHomeContentRequest = (params) => {
  return {
    type: HOME_CONTENT_REQUEST,
    params,
  };
};

export const getHomeContentSuccess = (payload) => {
  return {
    type: HOME_CONTENT_SUCCESS,
    payload,
  };
};
