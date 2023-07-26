import React from 'react';
import styled from 'styled-components';
// import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent } from '../../contexts/CartContext';

const Cart = () => {
  return <h4>cart page</h4>;
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default Cart;
