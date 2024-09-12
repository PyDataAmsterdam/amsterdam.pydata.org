import React, { useEffect, useState } from "react";
import CounterCard from "./CounterCard";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const conferenceDate = new Date('2024-09-19T09:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full flex flex-row justify-around md:justify-evenly items-center pt-8 pb-4 countdown-container">
      <CounterCard name="DAYS" timeValue={timeLeft.days} def={0} />
      <CounterCard name="HOURS" timeValue={timeLeft.hours} def={0} />
      <CounterCard name="MINUTES" timeValue={timeLeft.minutes} def={0} />
      <CounterCard name="SECONDS" timeValue={timeLeft.seconds} def={0} />
    </div>
  );
};

export default Countdown;
