import { createContext, useReducer, useEffect } from 'react';
import { products_url as url } from '../utils/constants';
import { actions } from '../actions';
import ProductsReducer from '../reducers/ProductsReducer';

const {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
} = actions;

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
};

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const fetchProducts = async (url) => {
    try {
      dispatch({ type: GET_ALL_PRODUCTS_START });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
}
