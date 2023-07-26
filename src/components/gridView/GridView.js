import React from 'react';
import styled from 'styled-components';
import ProductPortrait from '../product/ProductPortrait';

const GridView = ({ filteredProducts }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductPortrait key={product._id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: auto;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 892px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
