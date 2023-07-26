import React from 'react';
import Hero from '../../components/hero/Hero';
import ProductsCategory from '../../components/productCategories/ProductCategories';
import Contact from '../../components/contact/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <ProductsCategory />
      <Contact />
    </main>
  );
}

export default Home;
