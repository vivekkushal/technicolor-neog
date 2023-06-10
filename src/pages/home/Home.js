import React from 'react';
import Hero from '../../components/hero/Hero';
import FeaturedProducts from '../../components/productCategories/ProductCategories';
import Contact from '../../components/contact/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Contact />
    </main>
  );
}

export default Home;
