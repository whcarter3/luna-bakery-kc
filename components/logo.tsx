import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
interface LogoProps {
  href: string;
  img: ImageProps;
  className?: string;
}

const Logo = ({ img, href, className }: LogoProps): JSX.Element => {
  return (
    <Link href={href}>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={img.alt}
      />
    </Link>
  );
};

export default Logo;
