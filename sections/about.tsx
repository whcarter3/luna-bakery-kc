import Section from '../components/section';
import Card from '../components/card';
import type { CardProps } from '../components/card';

const aboutCards: CardProps[] = [
  {
    title: 'Why Sourdough?',
    text: `The fermentation process creates natural, wild yeasts that adapt to the air and environment around them. All sourdough starters are unique in bacterial content and the resulting yeast naturally leavens the bread. Sourdough naturally has a lower glycemic load, a lower gluten content, and higher probiotic content than bread made with instant yeast.`,
  },
  {
    title: 'Ingredients',
    text: `All Luna sourdough loaves are made with a mixture of high protein bread flour, whole wheat flour, and rye flour. We source organic, non-gmo grains to maximize the benefits and make all loaves the old fashioned way with flour, kosher salt, and water. That’s it. There are no additives, preservatives, or hidden ingredients.`,
  },
  {
    title: 'The Process',
    text: `All loaves are naturally leavened using our sourdough starter. They are all mixed in small batches in our home kitchen to ensure each loaf gets the time and attention it needs over the 24+ hour fermentation period. The resulting loaf stays fresh for an extended period of time and has a unique, delicious, hearty taste.`,
  },
];

const About = (): JSX.Element => {
  return (
    <Section id="about" className="items-start max-w-5xl" alternate>
      <h1 className="text-center w-full">About Luna Sourdough</h1>
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
