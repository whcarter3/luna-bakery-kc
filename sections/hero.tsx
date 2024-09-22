import Image from 'next/image';
import heroImage from '../public/images/homepage-cover-09222024-1.jpeg';

const Hero = () => {
  return (
    <div className="w-full relative aspect-[5/2] md:aspect-[22/8]">
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
