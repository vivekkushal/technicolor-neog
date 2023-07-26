import { createContext, useEffect, useReducer } from 'react';
import CartReducer from '../reducers/CartReducer';
import { actions } from '../actions';

const {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  ADJUST_CART_ITEM_WATCHES,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} = actions;

const getLocalCart = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalCart(),
  totalCartItems: 0,
  totalAmount: 0,
  convenienceFee: 31,
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (id, title, image, price, watches) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, title, image, price, watches },
    });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const adjustWatches = (Id, value) => {
    dispatch({ type: ADJUST_CART_ITEM_WATCHES, payload: { Id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, adjustWatches, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
