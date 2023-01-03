import Link from 'next/link';

const Order = (): JSX.Element => {
  return (
    <div className="container mx-auto px-2 py-4 bg-primary">
      <h1 className="text-center mb-4">
        An at-home micro sourdough bakery
      </h1>
      <div className="flex justify-center">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="button success"
          target={'_blank'}
        >
          ORDER
        </Link>
      </div>
    </div>
  );
};

export default Order;
