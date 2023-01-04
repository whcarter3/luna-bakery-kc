import classNames from 'classnames';
interface SectionProps {
  children: React.ReactNode;
  id: string;
  alternate?: boolean;
  className?: string;
}

// This is a layout component that wraps around all the pages
const Section = ({
  alternate,
  className,
  children,
  id,
}: SectionProps) => {
  return (
    <div
      className={classNames(
        'w-screen',
        alternate ? 'bg-accent text-primary' : 'bg-primary'
      )}
      id={id}
    >
      <div className={`container section ${className} px-5 md:px3`}>
        {children}
      </div>
    </div>
  );
};

export default Section;
