import React from 'react';
import './App.css';
/* Layout */
import MainLayout from './components/Layouts/mainLayout';
/* Components */
import Banner from './components/Banner/banner';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import About from './components/About/about';

function App() {
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
    </MainLayout>
    
  );
}

export default App;
