//get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p className="w-100 text-center">&copy;Luna Bakery KC {year}</p>
    </footer>
  );
};

export default Footer;
