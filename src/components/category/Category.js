import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Category({ categoryName, image }) {
  return (
    <Wrapper>
      <Link to="/products" className="container">
        <img src={image} alt="movie genre" />
      </Link>
      <footer>
        <h5>{categoryName}</h5>
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
  footer h5 {
    margin-bottom: 0;
    font-weight: 700;
    color: var(--clr-purple);
  }
`;

export default Category;
