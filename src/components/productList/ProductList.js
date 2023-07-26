import styled from 'styled-components';
import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import GridView from '../gridView/GridView';

const ProductList = () => {
  const { filteredProducts } = useContext(FilterContext);

  return filteredProducts.length ? (
    <GridView filteredProducts={filteredProducts}>product list</GridView>
  ) : (
    <Wrapper>
      <h5>
        Sorry, no products matched your search...
        <span style={{ fontSize: '30px' }}> 🥲</span>
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .btn {
    margin-top: 1rem;
  }
`;

export default ProductList;
