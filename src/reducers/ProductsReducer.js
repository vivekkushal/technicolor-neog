import { actions } from '../actions';

const {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
} = actions;

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    case GET_ALL_PRODUCTS_START:
      return { ...state, productsLoading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return { ...state, productsLoading: false, productsError: true };
    default:
      return state;
  }
};

export default ProductsReducer;
