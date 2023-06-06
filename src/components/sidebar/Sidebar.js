import { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import CartButtons from '../cartButtons/CartButtons';
// import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(ProductsContext);

  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="technicolor" />
          <span> Technicolor</span>
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeSidebar}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              Checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    span {
      color: var(--clr-purple);
      font-size: 2.5rem;
      font-weight: 700;
    }
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-purple);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-7);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-black-light);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  .cart-btn-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 850px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
