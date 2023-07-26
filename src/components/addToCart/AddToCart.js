import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useCartContext } from '../context/cart_context';
import AmountButtons from '../amountButtons/AmountButtons';

const AddToCart = ({ singleProduct }) => {
  // const { _id, available } = singleProduct;
  const [watches, setWatches] = useState(1);

  const increase = () => {
    setWatches((prev) => (prev < 5 ? prev + 1 : 5));
  };
  const decrease = () => {
    setWatches((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          watches={watches}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className="btn">
          add to cart
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

  .btn {
    background: var(--clr-purple);
    color: var(--clr-primary-1);
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
