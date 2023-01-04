import Link from 'next/link';
import Countdown from 'react-countdown';
import Section from '../components/section';
import { getClosestDay } from '../utils/helpers';

type rendererProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

//we use this to get the upcoming wednesdays for the countdown timer
const deadline = getClosestDay(3); //zero indexed starting on Monday, so 3 is wednesday

//we use this to format the countdown timer
//this is what we render if the timer is complete for the week
const Completionist = (): JSX.Element => (
  <p>
    The deadline has passed for this week! Orders placed now will
    fulfill the following week.
  </p>
);

const countDownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: rendererProps) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <>
        <span className="font-serif text-2xl">
          {days} days, {hours} hours, {minutes} minutes, {seconds}{' '}
          seconds
        </span>
        <br />
        <span>left to order for Friday delivery!</span>
      </>
    );
  }
};

const Order = (): JSX.Element => {
  return (
    <Section id="order" className="items-center">
      <h1>A sourdough micro-bakery delivering items weekly</h1>
      <Link
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="button success mt-2 mb-6"
        target={'_blank'}
      >
        ORDER NOW
      </Link>
      <div className="text-center">
        <Countdown date={deadline} renderer={countDownRenderer} />
      </div>
    </Section>
  );
};

export default Order;
