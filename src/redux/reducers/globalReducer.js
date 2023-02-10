import produce from 'immer';
import * as types from '../constants';

const initialState = {
  progress: {
    isLoading: false,
  }
};

const globalReducer = produce((draft = initialState, action) => {
  switch (action.type) {
  case types.PROGRESS_START:
    draft.progress.isLoading = true;
    break;

  case types.PROGRESS_END:
    draft.progress.isLoading = false;
    break;

  default:
    return draft;
  }  
});

export default globalReducer;
