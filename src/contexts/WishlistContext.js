import { createContext, useEffect, useReducer } from 'react';
import WishlistReducer from '../reducers/WishlistReducer';
import { actions } from '../actions';

const {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
  COUNT_WISHLIST_TOTALS,
} = actions;

const getLocalWishlist = () => {
  let wishlist = localStorage.getItem('wishlist');
  if (wishlist) {
    return JSON.parse(wishlist);
  } else {
    return [];
  }
};

const initialState = {
  wishlist: getLocalWishlist(),
  totalWishlistItems: 0,
};

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WishlistReducer, initialState);

  const addToWishlist = (id, title, image, price, available) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: { id, title, image, price, available },
    });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
  };

  const clearWishlist = () => {
    dispatch({ type: CLEAR_WISHLIST });
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    dispatch({ type: COUNT_WISHLIST_TOTALS });
  }, [state.wishlist]);

  return (
    <WishlistContext.Provider
      value={{ ...state, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
