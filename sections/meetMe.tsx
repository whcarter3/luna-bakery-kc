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
            After a tough pregnancy with my daughter that resulted in
            a diagnosis of pre-diabetes and hashimotos postpartum, I
            knew I had to learn more about healing through food. I
            have a history of working with fermented foods and have
            made kombucha, fermented sodas, fire cider, and homemade
            vinegars for over 12 years.
          </p>
          <p className="mb-2">
            In 2022, I received a bit of 10-year-old starter, learned
            the ins-and-outs of sourdough maintenance and baking, then
            began providing sourdough baked goods in the form of
            tortillas, desserts, crackers, and of course, loaves of
            bread to my family and neighbors. I was able to turn my
            health around and decided I wanted to share my love of
            fermented sourdogh bread with my community by opening my
            home kitchen to a small amount of weekly orders.
          </p>
          <p>
            In addition to working with sourdough, I am a tech
            operations director, a devoted mom, and wife to my
            supportive partner. I am also neurodiverse and very active
            in the adult women with autism community. I am so excited
            about the prospect of providing important sustenance to my
            community and I take pride in my meticulous process!
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
