import Link from 'next/link';

type EventProps = {
  event: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    url: string;
    googleMapsUrl?: string;
  };
};

let Event = (props: EventProps) => {
  let { event } = props;
  return (
    <div className="event">
      <p>{event.date.toLocaleString()}</p>
      <p>{event.time}</p>
      <h2 className="max-w-[500px]">{event.title}</h2>
      {/* <p>{event.location}</p> */}
      <Link href={event.url} target={'_blank'}>
        Event Website
      </Link>
      {event.googleMapsUrl && (
        <Link href={`${event.googleMapsUrl}}`} target={'_blank'}>
          Get Directions
        </Link>
      )}
      <p className="mt-2">{event.description}</p>
    </div>
  );
};

export default Event;
