import Image from 'next/image';
import Section from '../components/section';

const MeetMe = (): JSX.Element => {
  return (
    <Section id="meetMe" className="items-center max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 rounded-lg bg-white text-primary lg:max-h-[700px]">
        <div className="aspect-[1.5/1] lg:aspect-[1/1.5] relative">
          <Image
            src="/images/laurenProfile.jpeg"
            alt="Luna Bakery KC"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-tl-lg rounded-tr-lg rounded-bl-none lg:rounded-bl-lg lg:rounded-tr-none lg:max-h-[700px]"
          />
        </div>
        <div className="p-6 lg:max-h-[700px] overflow-scroll">
          <h1 className="leading-tight text-4xl">
            Meet Lauren Miller, Owner of Luna Bakery
          </h1>
          <p className="mb-2">
            After getting diagnosed with pre-diabetes and hashimotos
            postpartum, I knew I had to learn more about healing
            through food. I have a history of working with fermented
            foods and have made kombucha, fermented sodas, fire cider,
            and homemade vinegars for over 12 years.
          </p>
          <p className="mb-2">
            I started making all of my family&apos;s grain based items
            from scratch using sourdough starter and discard ranging
            from sourdough pie, crackers, to sourdough bread. I was
            able to turn my health around and decided I wanted to
            share my love of fermented bread with my community by
            opening my home kitchen to a small amount of weekly
            orders.
          </p>
          <p>
            What started as a hobby turned into a small business where
            I get to uphold my values. I focus on sourcing organic,
            non gmo, and local whenever possible. I love combining
            unexpected flavors and utilizing in season produce. I also
            grow a lot of what I use in my baked goods in our backyard
            garden.
          </p>
          <p>
            In addition to baking, I work in tech operations, am a
            devoted mom, and wife to my supportive husband. I&apos;m
            also an avid gardener and animal lover.
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
