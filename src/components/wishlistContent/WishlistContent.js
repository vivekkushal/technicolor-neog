import React, { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/WishlistContext';
import { Link } from 'react-router-dom';
import WishlistColumns from '../wishlistColumns/WishlistColumns';
import WishlistItem from '../wishlistItem/WishlistItem';

const WishlistContent = () => {
  const { wishlist, clearWishlist } = useContext(WishlistContext);

  return (
    <Wrapper className="section section-center">
      <WishlistColumns />
      {wishlist.map((item) => (
        <WishlistItem key={item._id} {...item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          keep shopping
        </Link>
        <button type="button" className="clear-btn" onClick={clearWishlist}>
          clear wishlist
        </button>
      </div>
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
export default WishlistContent;
