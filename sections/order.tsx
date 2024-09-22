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
    <Section id="order" className="items-center" alternate>
      <h1 className="text-center font-bold">
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
          bgColor="#2a3b52"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.instagram.com/lunabakerykc/"
          bgColor="#2a3b52"
          target={'_blank'}
        />
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100090509860697&mibextid=LQQJ4d"
          bgColor="#2a3b52"
          target={'_blank'}
        />
      </div>
      <div className="p-2 mt-8">
        <h2 className="text-center text-4xl font-bold">
          Upcoming Events
        </h2>

        {/* filters out events that have already passed */}
        {/* if all events are out of date show a message instead */}
        {(() => {
          const upcomingEvents = events.filter(
            (event) => new Date(event.expireDate) > new Date()
          );

          if (upcomingEvents.length === 0) {
            return (
              <p className="text-center">
                No upcoming events at this time. Check back soon!
              </p>
            );
          }

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {upcomingEvents.slice(0, 4).map((event, index) => (
                <Event key={index} event={event} />
              ))}
            </div>
          );
        })()}
      </div>
    </Section>
  );
};

export default Order;
