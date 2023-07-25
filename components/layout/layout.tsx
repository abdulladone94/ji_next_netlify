import { ReactNode } from 'react';
import Header from './navbar';
import Footer from './footer';

interface Children {
  children: ReactNode;
}

function Layout({ children }: Children) {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
}

export default Layout;
