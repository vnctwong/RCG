const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage }
    case 'CLEAR':
      return { ...curHttpState, error: null }
    default:
      throw new Error('Action type DNE');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
};

export default useHttp;
