// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';

import { ProductsProvider } from './contexts/ProductsContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { FilterProvider } from './contexts/FilterContext';

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductsProvider>
      <CategoriesProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CategoriesProvider>
    </ProductsProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
