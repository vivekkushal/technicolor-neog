import { useContext } from 'react';
import { BsMinecart, BsBookmarkHeart } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductsContext } from '../../contexts/ProductsContext';
// import { useCartContext } from '../context/cart_context';
// import { useUserContext } from '../context/user_context';

function CartButtons() {
  const { closeSidebar } = useContext(ProductsContext);

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/wishlist" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <BsBookmarkHeart />
          <span className="cart-value">5</span>
        </span>
      </Link>
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <BsMinecart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button type="button" className="auth-btn">
        <FiLogIn />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-6);
    display: flex;
    margin-right: 10px;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-11);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
