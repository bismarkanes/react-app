import constants from './constants';

const _getData = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        username: 'bismark',
      }
    });
  });
};

const startRequestAction = () => {
  return {
    type: constants.GET_DATA,
  };
};

const receivedData = (payload) => {
  return {
    type: constants.DATA_RECEIVED,
    payload,
  };
};

const getValues = () => {
  return (dispatch, getState) => {
    dispatch(startRequestAction());

    return _getData()
      .then((resp) => {
        dispatch(receivedData(resp));
      });
  };
};

export {
  getValues,
};
