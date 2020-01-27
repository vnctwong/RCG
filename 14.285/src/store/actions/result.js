import * as actionTypes from './actionTypes'

export const storeResult = (rslt) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: rslt
  };
};

export const storeResultAsync = (rslt) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(storeResult(rslt));
    }, 5000);
  }
};

export const deleteResult = (rsltElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: rsltElId
  };
};
