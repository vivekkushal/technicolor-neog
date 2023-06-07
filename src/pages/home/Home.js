import React from 'react';
import Hero from '../../components/hero/Hero';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Contact />
    </main>
  );
};

export default Home;
