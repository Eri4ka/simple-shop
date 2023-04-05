import { Footer } from '@components/pure/Footer';
import { Header } from '@components/pure/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
