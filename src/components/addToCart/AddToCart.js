import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useCartContext } from '../context/cart_context';
import AmountButtons from '../amountButtons/AmountButtons';

const AddToCart = ({ singleProduct }) => {
  const { _id } = singleProduct;
  const [watches, setWatches] = useState(1);

  const increase = () => {};
  const decrease = () => {};

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          watches={watches}
          increase={increase}
          decrease={decrease}
        >
          <Link to="/cart">add to cart</Link>
        </AmountButtons>
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
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
