import { actions } from '../actions';

const {
  GET_ALL_CATEGORIES_START,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_ERROR,
} = actions;

const CategoriesReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_START:
      return { ...state, categoriesLoading: true };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categoriesLoading: false, categories: action.payload };
    case GET_ALL_CATEGORIES_ERROR:
      return { ...state, categoriesLoading: false, categoriesError: true };
    default:
      return state;
  }
};

export default CategoriesReducer;
