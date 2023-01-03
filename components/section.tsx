interface LayoutProps {
  children: React.ReactNode;
}

// This is a layout component that wraps around all the pages
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* section has px-2 so it aligns with the navbar */}
      <div className="container mx-auto px-2 py-4 bg-primary">
        {children}
      </div>
    </>
  );
};

export default Layout;
