interface LayoutProps {
  children: React.ReactNode;
  alternate?: boolean;
}

// This is a layout component that wraps around all the pages
const Layout = ({ alternate, children }: LayoutProps) => {
  return (
    <>
      {/* section has px-2 so it aligns with the navbar */}
      <div
        className={`container section mx-auto px-2 py-4 min-h- ${
          alternate ? 'bg-accent' : 'bg-primary'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
