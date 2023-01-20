import { useState, createRef, useEffect } from 'react';
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

type OrderProps = {
  data: string;
};

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
      </>
    );
  }
};

const Order = (): JSX.Element => {
  //we use this to get the upcoming Friday for the countdown timer
  const [deadline, setDeadline] = useState(
    getClosestDay(5, false, true)
  ); //zero indexed starting on Monday, so 5 is Friday
  const [delivery, setDelivery] = useState(getClosestDay(0, true)); //zero indexed starting on Monday, so 6 is Sunday

  //we create a ref for the countdown timer
  const countdownRef = createRef<Countdown>();

  //we use this to start the countdown timer
  useEffect(() => {
    countdownRef.current?.start();
  }, [countdownRef]);

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
      <div className="text-center">
        <Countdown
          date={deadline}
          renderer={countDownRenderer}
          autoStart={false}
          ref={countdownRef}
        />
        <br />
        <span>left to order for {delivery} delivery!</span>
      </div>
    </Section>
  );
};

export default Order;
