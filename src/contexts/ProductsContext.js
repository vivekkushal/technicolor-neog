import { createContext, useReducer } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
import ProductsReducer from '../reducers/ProductsReducer';

const initialState = {
  isSidebarOpen: false,
};

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
}
