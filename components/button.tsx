interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  success?: boolean;
}

const Button = ({
  className,
  onClick,
  success,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`button ${className} ${success ? 'success' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
