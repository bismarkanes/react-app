import produce from 'immer';
import { HOME_CONTENT_REQUEST, HOME_CONTENT_SUCCESS, } from '../constants';

const initialState = {
  payload: null,
  params: null,
  isLoading: false,
};

export default produce((draft = initialState, action) => {
  /* eslint-disable indent */
  switch (action.type) {
    case HOME_CONTENT_REQUEST:
      draft.params = action.params;
      draft.isLoading = true;
      break;

    case HOME_CONTENT_SUCCESS:
      draft.payload = action.payload;
      draft.isLoading = false;
      break;

    default:
      return draft;
  }
  /* eslint-enable indent */
});
