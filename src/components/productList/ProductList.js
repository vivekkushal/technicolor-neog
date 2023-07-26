import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import GridView from '../gridView/GridView';
// import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts } = useContext(FilterContext);

  return <GridView filteredProducts={filteredProducts}>product list</GridView>;
};

export default ProductList;
