import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartColumns from '../cartColumns/CartColumns';
import CartItem from '../cartItem/CartItem';
import CartTotals from '../cartTotals/CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item._id} {...item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          keep shopping
        </Link>
        <button type="button" className="clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-blue-light);
    color: var(--clr-black-light);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    transition: var(--transition);
  }
  .link-btn:hover {
    background: var(--clr-purple);
    color: var(--clr-primary-1);
  }
  .clear-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-blue-light);
    color: var(--clr-black-light);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
`;
export default CartContent;
