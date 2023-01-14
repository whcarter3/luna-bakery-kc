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
    href: 'https://shop.castiron.me/luna-bakery',
    label: 'Order',
  },
  { href: '#about', label: 'About' },
  { href: '#meetMe', label: 'Meet Me' },
  { href: '#contact', label: 'Contact' },
];

//this is our navbar component
const Navbar = () => {
  return (
    <nav className="p-0 md:p-2 fixed top-0 left-0 z-10 bg-primary w-full shadow-lg">
      <div className="mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-0 py-0 md:py-3">
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
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto bg-accent md:bg-transparent">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target={href.includes('http') ? '_blank' : undefined}
              className="px-3 py-2 font-serif text-2xl text-primary md:text-white"
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
