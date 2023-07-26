import { useContext } from 'react';
import styled from 'styled-components';
import { WishlistContext } from '../../contexts/WishlistContext';

const AddToWishlist = ({ singleProduct }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const { _id, title, image, price, available } = singleProduct;

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className="btn-wish"
          onClick={() => addToWishlist(_id, title, image, price, available)}
        >
          add to wishlist
        </button>
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
