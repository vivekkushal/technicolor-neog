import { actions } from '../actions';

const {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  COUNT_WISHLIST_TOTALS,
} = actions;

const WishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const { id, title, image, price, available } = action.payload;
      const tempItem = state.wishlist.find((item) => item._id === id);
      if (tempItem) {
        return state;
      } else {
        const newItem = {
          _id: id,
          title,
          image,
          price,
          available,
        };
        return { ...state, wishlist: [...state.wishlist, newItem] };
      }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter((item) => item._id !== action.payload),
        ],
      };
    case CLEAR_WISHLIST:
      return { ...state, wishlist: [] };
    case COUNT_WISHLIST_TOTALS:
      return { ...state, totalWishlistItems: state.wishlist.length };
    default:
      return state;
  }
};

export default WishlistReducer;
