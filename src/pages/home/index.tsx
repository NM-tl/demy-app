import { FC } from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import Banner from '../../widgets/banner/Banner';
import Header from '../../widgets/header/Header';
import Hero from '../../widgets/hero/Hero';
import About from '../../widgets/about/About';
import Testimonials from '../../widgets/testimonials/Testimonials';

const Home: FC = () => {
  return (
    <MainLayout>
      <Banner 
        title="New to Udemy? Learning leads to opportunity"
        description="Shop now to get an exclusive offer:"
        price="14.99"
        expired="12.06.24"
      />
      <Header />
      <Hero
        title="New customer offer!"
        description="Top courses from $13.99 when you first visit Udemy"
      />
      <About title='Trusted by over 16,000 companies and millions of learners around the world' />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;
