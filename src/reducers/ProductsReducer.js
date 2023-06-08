import { actions } from '../actions';

const {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  // GET_ALL_PRODUCTS_START,
  // GET_ALL_PRODUCTS_SUCCESS,
  // GET_ALL_PRODUCTS_ERROR,
} = actions;

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    default:
      return state;
  }
};

export default ProductsReducer;
