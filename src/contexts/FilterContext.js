import { createContext, useContext, useEffect, useReducer } from 'react';
import { ProductsContext } from './ProductsContext';
import FilterReducer from '../reducers/FilterReducer';
import { actions } from '../actions';

const {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} = actions;

const initialState = {
  allProducts: [],
  filteredProducts: [],
  sort: 'relevance',
  filters: {
    search: '',
    category: ['All'],
    rating: 10,
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    unavailable: true,
  },
};

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const { products } = useContext(ProductsContext);
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      if (value === 'All') {
        if (state.filters.category.includes('All')) {
          value = state.filters.category.filter((ctg) => ctg !== 'All');
        } else {
          value = [value];
        }
      } else {
        if (state.filters.category.includes('All')) {
          let temp = [...state.filters.category, value];
          value = temp.filter((ctg) => ctg !== 'All');
        } else {
          if (state.filters.category.includes(value)) {
            value = state.filters.category.filter((ctg) => ctg !== value);
          } else {
            value = [...state.filters.category, value];
          }
        }
      }
    }
    if (name === 'price' || name === 'rating') {
      value = Number(value);
    }
    if (name === 'unavailable') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}
