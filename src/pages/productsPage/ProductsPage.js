import React from 'react';
import styled from 'styled-components';
import Filters from '../../components/filters/Filters';
import ProductList from '../../components/productList/ProductList';
import Sort from '../../components/sort/Sort';

const ProductsPage = () => {
  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
