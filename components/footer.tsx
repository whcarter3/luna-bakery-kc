//get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="p-4" id="footer">
      <p className="w-100 text-center">Made with &#9825; in {year}</p>
    </footer>
  );
};

export default Footer;
