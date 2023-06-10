import { createContext, useReducer, useEffect } from 'react';
import CategoriesReducer from '../reducers/CategoriesReducer';
import { categories_url as url } from '../utils/constants';
import { actions } from '../actions';

const {
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_ERROR,
} = actions;

const initialState = {
  categoriesLoading: false,
  categoriesError: false,
  categories: [],
};

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  const fetchCategories = async (url) => {
    try {
      dispatch({ type: GET_ALL_CATEGORIES_START });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: data.categories });
    } catch (error) {
      dispatch({ type: GET_ALL_CATEGORIES_ERROR });
    }
  };

  useEffect(() => {
    fetchCategories(url);
  }, []);

  return (
    <CategoriesContext.Provider value={{ ...state }}>
      {children}
    </CategoriesContext.Provider>
  );
}
