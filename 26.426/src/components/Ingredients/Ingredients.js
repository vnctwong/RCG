import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not reach here');
  }
}

// const httpReducer = (curHttpState, action) => {
//   switch (action.type) {
//     case 'SEND':
//       return { loading: true, error: null };
//     case 'RESPONSE':
//       return { ...curHttpState, loading: false };
//     case 'ERROR':
//       return { loading: false, error: action.errorMessage }
//     case 'CLEAR':
//       return { ...curHttpState, error: null }
//     default:
//       throw new Error('Action type DNE');
//   }
// };

const Ingredients = () => {
  // const [userIngredients, setUserIngredients] = useState([]);
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [isLoading, setIsLoading] = useState(false);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
  // const [error, setError] = useState();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' })
    fetch('https://rcg-26-426-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        // setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' })
        return response.json();
      })
      .then(responseData => {
        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient }
        // ]);
        dispatch({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
      });
  }, []);

  const removeIngredientHandler = useCallback(ingredientId => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' })

  }, []);

  const clearError = useCallback(() => {
    // setError(null);
    dispatchHttp({ type: 'CLEAR' })
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    )
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
