import { createContext, useContext, useEffect, useReducer } from 'react';
import { ProductsContext } from './ProductsContext';
import FilterReducer from '../reducers/FilterReducer';
import { actions } from '../actions';

const {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} = actions;

const initialState = {
  allProducts: [],
  filteredProducts: [],
};

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const { products } = useContext(ProductsContext);
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
}
