import constants from '../actions/constants' ;

const initialState = {
  values: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case constants.GET_DATA:
    return {
      ...state,
      isLoading: true,
    };

  case constants.DATA_RECEIVED:
    return {
      ...state,
      values: action.payload,
      isLoading: false,
    };

  default:
    return state;
  }
};
