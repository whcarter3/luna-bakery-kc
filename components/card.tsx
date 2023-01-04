export type CardProps = {
  title: string;
  text: string;
};

const Card = ({ title, text }: CardProps): JSX.Element => {
  return (
    <div className="card rounded-lg p-4 grow min-h-[300px] shadow-lg bg-white">
      <h2 className="border-b-2 border-primary w-auto inline-block pr-4 pb-1 text-3xl font-serif mb-4">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
