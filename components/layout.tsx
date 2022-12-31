import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

// This is a layout component that wraps around all the pages
const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {/* layout has px-2 so it aligns with the navbar */}
      <main className="container mx-auto px-2 py-4 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
