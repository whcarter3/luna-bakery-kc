import Link from 'next/link';

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
  return (
    <nav className="bg-gray-400">
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl text-white text-serif">
              Luna Bakery KC
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="px-2">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
