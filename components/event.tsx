import Link from 'next/link';

type EventProps = {
  event: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    url: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
};

let Event = (props: EventProps) => {
  let { event } = props;
  return (
    <div className="event">
      <p>{event.date}</p>
      <p>{event.time}</p>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <Link href={event.url}>Event Website</Link>
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${event.coordinates.lat},${event.coordinates.lng}`}
        target={'_blank'}
      >
        Get Directions
      </Link>
    </div>
  );
};

export default Event;
