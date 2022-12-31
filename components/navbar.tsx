import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

type LinkDetails = {
  href: string;
  label: string;
};

//This is our collection of links that link to internal and external pages
const links: LinkDetails[] = [
  { href: '/about', label: 'About' },
  { href: '/how', label: 'How It Works' },
  { href: '/contact', label: 'Contact' },
  {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    label: 'Order',
  },
];

//this is our navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2">
      <div className="container mx-auto flex items-center justify-between px-2 py-3 md:px-0">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} width={300} alt="Luna Bakery Logo" />
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="px-3 py-2 font-semibold text-accent hover:bg-blue-700"
          >
            Menu
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } fixed top-0 left-0 w-full h-full z-50 bg-gray-800`}
        >
          <div className="container mx-auto py-8">
            <button
              onClick={toggleMenu}
              className="float-right px-3 py-2 font-semibold text-accent bg-red-500 rounded-full hover:bg-red-700"
            >
              Close
            </button>
            <Link
              href="/"
              className="block px-3 py-2 font-semibold text-accent md:ml-2"
            >
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 font-semibold text-accent md:ml-2"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 font-semibold text-accent"
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
