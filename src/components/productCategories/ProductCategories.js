import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import Category from '../category/Category';

function ProductCategories() {
  const { categoriesLoading, categoriesError, categories } =
    useContext(CategoriesContext);

  return (
    <>
      {categoriesLoading && <Loading />}
      {categoriesError && <Error />}
      {!categoriesLoading && !categoriesError && (
        <Wrapper className="section">
          <div className="title">
            <h2>Movie Genres</h2>
            <div className="underline"></div>
          </div>
          <div className="section-center featured">
            {categories.map((category) => (
              <Category key={category._id} {...category} />
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.section`
  background: var(--clr-grey-1);
  h2 {
    color: var(--clr-purple);
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default ProductCategories;
