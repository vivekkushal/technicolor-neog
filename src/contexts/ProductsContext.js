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
  GET_SINGLE_PRODUCT_START,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} = actions;

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
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
    dispatch({ type: GET_ALL_PRODUCTS_START });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: GET_ALL_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_START });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.product });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
