import Image from 'next/image';
import Section from '../components/section';

const MeetMe = (): JSX.Element => {
  return (
    <Section id="meetMe" className="items-center max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 rounded-lg bg-white text-primary lg:max-h-[700px]">
        <div className="aspect-[1.5/1] lg:aspect-[1/1.5] relative">
          <Image
            src="/images/laurenAndBillie.jpeg"
            alt="Luna Bakery KC"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-tl-lg rounded-tr-lg rounded-bl-none lg:rounded-bl-lg lg:rounded-tr-none lg:max-h-[700px]"
          />
        </div>
        <div className="p-6 lg:max-h-[700px] overflow-scroll">
          <h1 className="leading-tight text-4xl">
            About Luna Bakery
          </h1>
          <p className="mb-2">
            After struggling with autoimmune and hormone flareups
            postpartum, I knew I had to learn more about healing
            through food. I have a history of working with fermented
            foods and have made kombucha, fermented sodas, fire cider,
            and homemade vinegars for over 12 years.
          </p>
          <p className="mb-2">
            I started baking sourdough for my family. I was able to
            turn my health around and decided I wanted to share my
            love of fermented bread with my community by opening my
            home kitchen to a small amount of weekly orders in January
            of 2023. Now we have a successful farmer&apos;s market
            stall at the Parkville Farmers Market and are building our
            online business even more.
          </p>
          <p className="mb-2">
            I named my business after my daughter, my first child,
            Billie Luna Carter with the intent of building a business
            that allowed me to spend as much time as possible with
            her. She loved attending markets with me, baking, and was
            my best taste tester. She passed away very unexpectedly in
            August 2024 at the tiny age of 2 years 6 months. The pain
            of her loss is something I&apos;m not able to put into
            words. While Billie&apos;s life was short, she is the
            light and energy that keeps both me and my bakery running.
            Please think of Billie while you enjoy our delicious,
            nourishing baked goods.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-serif text-primary"></p>
        </div>
      </div>
    </Section>
  );
};

export default MeetMe;
