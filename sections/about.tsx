import Section from '../components/section';
import Card from '../components/card';
import type { CardProps } from '../components/card';

const aboutCards: CardProps[] = [
  {
    title: 'What do',
    text: `Buster's in what we like to call a light to no coma. In laymans terms, it might be considered a very heavy nap. In prison, you just have to close your eyes and take it, but here you have to close your eyes and give it. No one was making fun of Andy Griffith. I can't emphasize that enough. No, I was ashamed to be SEEN with you. I like being with you. I believe you will find the dessert to be both engrossing and high-grossing! So we don't get dessert? Heart attack never stopped old big bear!`,
  },
  {
    title: 'How is',
    text: `Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. Have you ever tried just turning off the TV, sitting down with your children, and hitting them? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Fry! Stay back! He's too powerful! And why did 'I' have to take a cab? `,
  },
  {
    title: 'Cuz why',
    text: `I'm baby leggings farm-to-table occupy, literally shaman 3 wolf moon enamel pin chillwave yr. Jianbing tumblr hexagon, edison bulb post-ironic bespoke chicharrones bodega boys celiac. Seitan offal vinyl, kinfolk gentrify fit taiyaki austin helvetica. Echo park fixie poke bruh blue bottle austin.`,
  },
];

const About = (): JSX.Element => {
  return (
    <Section id="about" className="items-start max-w-5xl" alternate>
      <h1 className="text-6xl font-bold text-left">About</h1>
      <p className="text-2xl">This is the about section</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
        {aboutCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;
