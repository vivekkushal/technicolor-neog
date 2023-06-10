import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import Product from '../product/Product';

function FeaturedProducts() {
  const { productsLoading, productsError, featuredProducts } =
    useContext(ProductsContext);

  return (
    <>
      {productsLoading && <Loading />}
      {productsError && <Error />}
      <Wrapper className="section">
        <div className="title">
          <h2>featured movies</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {featuredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </Wrapper>
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

export default FeaturedProducts;
