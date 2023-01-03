import Image, { StaticImageData } from 'next/image';
import Footer from './footer';
import Navbar from './navbar';

interface LayoutProps {
  layoutImg: StaticImageData;
  imgAlt: string;
  children: React.ReactNode;
}

// This is a layout component that wraps around all the pages
const Layout = ({
  layoutImg,
  imgAlt,
  children,
  ...props
}: LayoutProps) => {
  return (
    <>
      <Navbar />
      {/* layout has px-2 so it aligns with the navbar */}
      <div className="w-full relative aspect-[16/9]">
        <Image
          src={layoutImg}
          alt={imgAlt}
          fill={true}
          style={{ objectFit: 'cover' }}
        ></Image>
      </div>
      <main className="container mx-auto px-2 py-4 min-h-screen bg-primary">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
