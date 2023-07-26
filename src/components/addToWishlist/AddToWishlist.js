import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useCartContext } from '../context/cart_context';

const AddToWishlist = ({ singleProduct }) => {
  // const { _id, available } = singleProduct;

  return (
    <Wrapper>
      <div className="btn-container">
        <Link to="/wishlist" className="btn-wish">
          add to wishlist
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .btn-container {
    margin-top: 2rem;
  }

  .btn-wish {
    background: var(--clr-blue-light);
    color: var(--clr-black-light);
    margin-top: 3.5rem;
    margin-left: 2rem;
    text-transform: uppercase;
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
  }
`;

export default AddToWishlist;
