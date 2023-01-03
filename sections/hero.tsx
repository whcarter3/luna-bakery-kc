import Image from 'next/image';
import heroImage from '../public/images/homepage-cover.jpeg';

const Hero = () => {
  return (
    <div className="w-full relative aspect-[21/9]">
      <Image
        src={heroImage}
        alt="Luna Bakery KC"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Hero;
