import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import logoSrc from '../public/images/logo-09222024.png';

type LinkDetails = {
  href: string;
  label: string;
  target?: string;
};

//This is our collection of links that link to internal and external pages
const links: LinkDetails[] = [
  {
    href: 'https://shop.castiron.me/luna-bakery',
    label: 'Order',
    target: '_blank',
  },
  { href: '#about', label: 'About', target: undefined },
  {
    href: '/starter-guide.pdf',
    label: 'Starter Guide',
    target: '_blank',
  },
  // {
  // href: 'https://bit.ly/lunabakerysubscription',
  //  label: 'Subscription',
  //  target: '_blank',
  //},
  // {
  //   href: 'https://www.hotplate.com/lunabakerykc?event=7b3e8',
  //   label: 'Holiday Menu',
  //   target: '_blank',
  // },
];

//this is our navbar component
const Navbar = () => {
  return (
    <nav className="p-0 md:p-2 fixed top-0 left-0 z-10 bg-accent w-full shadow-lg">
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
          {links.map(({ href, label, target }) => (
            <Link
              key={href}
              href={href}
              target={target}
              className="px-3 py-2 font-serif font-bold md:text-2xl text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-primary px-3 py-2 text-center">
        <p>
          Luna Bakery is currently closed for Lauren&apos;s maternity
          leave. We will tentatively reopen in December for the
          holidays.
          <br />
          Follow us on socials for the most up to date information!
          Thank you for your support!
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
