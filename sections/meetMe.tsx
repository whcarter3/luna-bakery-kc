import Image from 'next/image';
import Section from '../components/section';

const MeetMe = (): JSX.Element => {
  return (
    <Section id="meetMe" className="items-center">
      <h1>Meet me</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="aspect-[1/1.5] relative">
          <Image
            src="/images/LaurenMiller.jpg"
            alt="Luna Bakery KC"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <p>
            Sensors indicate no shuttle or other ships in this sector.
            According to coordinates, we have travelled 7,000 light
            years and are located near the system J-25. Tractor beam
            released, sir. Force field maintaining our hull integrity.
            Damage report? Sections 27, 28 and 29 on decks four, five
            and six destroyed. Without our shields, at this range it
            is probable a photon detonation could destroy the
            Enterprise.
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
