import Image from 'next/image';
import Section from '../components/section';

const MeetMe = (): JSX.Element => {
  return (
    <Section id="meetMe" className="items-center max-w-5xl">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-white max-h-[700px] text-primary">
        <div className="aspect-[1/1.5] relative">
          <Image
            src="/images/LaurenMiller.jpg"
            alt="Luna Bakery KC"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-l-lg max-h-[700px]"
          />
        </div>
        <div className="p-8">
          <h1 className="leading-tight">
            Meet Lauren Miller, Owner of Luna Bakery
          </h1>
          <p>
            After a tough pregnancy with my daughter that resulted in
            a diagnosis of pre-diabetes and hashimotos postpartum, I
            knew I had to learn more about healing through food. I
            have a history of working with fermented foods and have
            made kombucha, fermented sodas, fire cider, and homemade
            vinegars for over 12 years. I received a bit of
            10-year-old starter, learned the ins-and-outs of sourdough
            maintenance and baking, then began providing sourdough
            baked goods in the form of tortillas, desserts, crackers,
            and of course, loaves of bread to my family and neighbors.
            I was able to turn my health around and decided I wanted
            to share my love of fermented sourdogh bread with my
            community by opening my home kitchen to a small amount of
            weekly orders. In addition to working with sourdough, I am
            an operations director at a food tech company, a devoted
            mom, and wife to my supportive partner. I am also
            neurodiverse and very active in the adult women with
            autism community. I am so excited about the prospect of
            providing important sustenance to my community and I take
            pride in my meticulous process!
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
