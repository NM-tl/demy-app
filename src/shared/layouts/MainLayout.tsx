import { PropsWithChildren } from 'react';
import Banner from '../../widgets/banner/Banner';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/footer/Footer';

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <main className='w-full'>
      <Banner 
        title="New to Udemy? Learning leads to opportunity"
        description="Shop now to get an exclusive offer:"
        price="14.99"
        expired="12.06.24"
      />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
