import { createContext, useEffect, useReducer } from 'react';
import CartReducer from '../reducers/CartReducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const initialState = {};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
};
