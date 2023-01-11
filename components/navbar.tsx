import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import Button from './button';
import logoSrc from '../public/logo.png';

type LinkDetails = {
  href: string;
  label: string;
};

//This is our collection of links that link to internal and external pages
const links: LinkDetails[] = [
  {
    href: '#order',
    label: 'Order',
  },
  { href: '#about', label: 'About' },
  { href: '#meetMe', label: 'Meet Me' },
  { href: '#contact', label: 'Contact' },
];

//this is our navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2 fixed top-0 left-0 z-10 bg-primary w-full">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-2 py-3 md:px-0">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Logo
            img={{
              src: logoSrc,
              width: 300,
              height: 100,
              alt: 'Luna Bakery KC',
            }}
            href="/"
          />
        </div>
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 font-serif text-2xl text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
