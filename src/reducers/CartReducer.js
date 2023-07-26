import { actions } from '../actions';

const {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  ADJUST_CART_ITEM_WATCHES,
} = actions;

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, image, price, watches } = action.payload;
      const tempItem = state.cart.find((item) => item._id === id);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem._id === id) {
            let newWatches = cartItem.watches + watches;
            if (newWatches > 5) {
              newWatches = 5;
            }
            return { ...cartItem, watches: newWatches };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          _id: id,
          title,
          image,
          price,
          watches,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item._id !== action.payload)],
      };
    case ADJUST_CART_ITEM_WATCHES:
      const { Id, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item._id === Id) {
          if (value === 'increase') {
            let newWatches = item.watches + 1;
            if (newWatches > 5) {
              newWatches = 5;
            }
            return { ...item, watches: newWatches };
          }
          if (value === 'decrease') {
            let newWatches = item.watches - 1;
            if (newWatches < 1) {
              newWatches = 1;
            }
            return { ...item, watches: newWatches };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case COUNT_CART_TOTALS:
      const { totalCartItems, totalAmount } = state.cart.reduce(
        (acc, curr) => {
          const { watches, price } = curr;
          acc.totalCartItems += watches;
          acc.totalAmount += price * watches;

          return acc;
        },
        { totalCartItems: 0, totalAmount: 0 }
      );
      return { ...state, totalCartItems, totalAmount };
    default:
      return state;
  }
};

export default CartReducer;
