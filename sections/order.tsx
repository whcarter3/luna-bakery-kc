import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
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
      <div className="flex gap-3">
        <SocialIcon
          url="https://www.tiktok.com/lunabakerykc/"
          bgColor="#eec9b6"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.instagram.com/lunabakerykc/"
          bgColor="#eec9b6"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100090509860697&mibextid=LQQJ4d"
          bgColor="#eec9b6"
          target={'_blank'}
        />
      </div>
      <div className="p-2 mt-8">
        <h2 className="text-center text-4xl">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* filters out events that have already passed */}
          {events
            .filter(
              (event) => new Date(event.expireDate) > currentDateTime
            )
            .map((event, index) => (
              <Event key={index} event={event} />
            ))}
        </div>
        <h2 className="text-center mt-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* filters only last events that have already passed in reverse date order */}
          {events
            .filter(
              (event) => new Date(event.expireDate) < currentDateTime
            )
            .reverse()
            .slice(0, 2)
            .map((event, index) => (
              <Event key={index} event={event} />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Order;
