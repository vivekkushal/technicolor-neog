import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import styled from 'styled-components';
import CartContent from '../../components/cartContent/CartContent';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <main>
          <Wrapper className="page">
            <CartContent />
          </Wrapper>
        </main>
      ) : (
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              keep shopping
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
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
