import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

function Products() {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return <div>This is Products page</div>;
}

export default Products;
