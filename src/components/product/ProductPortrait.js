import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProductPortrait({ image, title, price, _id }) {
  return (
    <Wrapper>
      <Link to={`/products/${_id}`} className="container">
        <img src={image} alt={title} />
      </Link>
      <footer>
        <h5>{title}</h5>
        <p>{price}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .container:hover img {
    opacity: 0.5;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer h5 {
    color: var(--clr-purple);
  }
  footer p {
    color: var(--clr-blue-light);
    letter-spacing: var(--spacing);
  }
`;

export default ProductPortrait;
