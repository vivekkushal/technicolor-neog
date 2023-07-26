import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../contexts/WishlistContext';
import styled from 'styled-components';
import WishlistContent from '../../components/wishlistContent/WishlistContent';

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      {wishlist.length > 0 ? (
        <main>
          <Wrapper className="page">
            <WishlistContent />
          </Wrapper>
        </main>
      ) : (
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your wishlist is empty</h2>
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

export default Wishlist;
