import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      // if state.results has objs, newArray.results will still point to original array. Can delete, indices but not change them
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);
      return updatedObject(state, { results: updatedArray });
  }
  return state;
};

export default reducer
