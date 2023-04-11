import { SocialIcon } from 'react-social-icons';
//get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="p-4" id="footer">
      <div className="flex justify-center gap-3 mb-5">
        <SocialIcon
          url="https://www.tiktok.com/@lunabakerykc/"
          bgColor="#fff"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.instagram.com/lunabakerykc/"
          bgColor="#fff"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100090509860697&mibextid=LQQJ4d"
          bgColor="#fff"
          target={'_blank'}
        />
      </div>
      <p className="w-100 text-center">
        Made with &#9825; in Kansas City, MO | {year}
      </p>
    </footer>
  );
};

export default Footer;
