import Link from 'next/link';
import Section from '../components/section';
import Event from '../components/event';
import events from '../data/events.json';

type OrderProps = {
  data: string;
};

const Order = (): JSX.Element => {
  let currentDateTime = new Date();

  return (
    <Section id="order" className="items-center">
      <h1 className="text-center">
        A home sourdough microbakery serving Kansas City
      </h1>
      <Link
        href="https://shop.castiron.me/luna-bakery"
        className="button success mt-2 mb-6"
        target={'_blank'}
      >
        ORDER NOW
      </Link>
      <h2 className="text-center">Upcoming Events</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* filters out events that have already passed */}
        {events
          .filter((event) => new Date(event.date) > currentDateTime)
          .map((event, index) => (
            <Event key={index} event={event} />
          ))}
      </div>
      <h2 className="text-center mt-5">Past Events</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* filters only events that have already passed */}
        {events
          .filter((event) => new Date(event.date) < currentDateTime)
          .map((event, index) => (
            <Event key={index} event={event} />
          ))}
      </div>
    </Section>
  );
};

export default Order;
