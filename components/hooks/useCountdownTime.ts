import { useEffect, useState } from "react";

interface CurrentPrevious {
  current: Countdown;
  previous: Countdown;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(endDate: Date) {
  const now = new Date().getTime();
  const distance = endDate.getTime() - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

const init = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function useCountdownTime(endDate: Date) {
  const [{ current, previous }, setCountdownTime] = useState<CurrentPrevious>({
    current: init,
    previous: init,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(endDate),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return { current, previous };
}

export default useCountdownTime;
