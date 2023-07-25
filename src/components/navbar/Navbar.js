import { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartButtons from '../cartButtons/CartButtons';
import { ProductsContext } from '../../contexts/ProductsContext';
// import { useUserContext } from '../context/user_context';

function Nav() {
  const { openSidebar } = useContext(ProductsContext);

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="technicolor" />
            <span> Technicolor</span>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Movies</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 100vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 65px;
      margin-left: 15px;
      margin-top: 10px;
    }
    span {
      color: var(--clr-purple);
      font-size: 3rem;
      font-weight: 700;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-purple);
    cursor: pointer;
    svg {
      font-size: 2rem;
      margin-right: 15px;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 950px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-7);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-11);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Nav;
