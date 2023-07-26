import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext';
// import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { totalAmount, convenienceFee } = useContext(CartContext);

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>₹{totalAmount}</span>
          </h5>
          <p>
            convenience fee: <span>₹{convenienceFee}</span>
          </p>
          <hr />
          <h4>
            order total : <span>₹{totalAmount + convenienceFee}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 2px solid var(--clr-primary-11);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    color: var(--clr-grey-7);
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    background: var(--clr-purple);
    color: var(--clr-primary-1);
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
