import { useContext, useState } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext';
import AmountButtons from '../amountButtons/AmountButtons';

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useContext(CartContext);
  const { _id, title, image, price, available } = singleProduct;
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
        {!available && <span>Not available in your country</span>}
        <div className="btn-container-inside">
          {available && (
            <AmountButtons
              watches={watches}
              increase={increase}
              decrease={decrease}
            />
          )}
          <button
            disabled={!available}
            className={`btn ${available}`}
            onClick={() => addToCart(_id, title, image, price, watches)}
          >
            add to cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .btn-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    span {
      margin-bottom: 1rem;
    }
  }
  .btn {
    background: var(--clr-purple);
    color: var(--clr-primary-1);
    margin-top: 1rem;
    width: 140px;
  }
  .false {
    background: grey;
    color: var(--clr-primary-1);
    width: 140px;
    cursor: no-drop;
  }
`;

export default AddToCart;
