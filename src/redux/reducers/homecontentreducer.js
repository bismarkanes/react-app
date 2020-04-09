import { HOME_CONTENT_REQUEST, HOME_CONTENT_SUCCESS, } from '../constants';

const initialState = {
  payload: null,
  params: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  /* eslint-disable indent */
  switch (action.type) {
    case HOME_CONTENT_REQUEST:
      return {
        ...state,
        params: action.params,
        isLoading: true,
      };

    case HOME_CONTENT_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
  /* eslint-enable indent */
};
