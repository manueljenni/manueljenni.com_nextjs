"use client";
import { lookupViaCity } from "city-timezones";
import { useEffect, useState } from "react";
import Utils from "../Utils";

export default function BoxThree(props: { top: string; bottom: string; city: string }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 500);

    // Clear the interval when the component is unmounted or when the dependency changes
    return () => clearInterval(interval);
  }, [setTime]);

  const cities = lookupViaCity(props.city);
  var timezone = "Europe/Berlin";
  if (cities.length > 0) {
    timezone = cities[0].timezone;
  }

  const formattedTime = time.toLocaleString("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  return (
    <div className="centerDiv boxComponent rounded-lg p-4 ring-1 ring-neutral-300">
      <div className="space-y-2 text-center">
        <p className="text-lg">{props.top}</p>
        <p className="text-2xl font-medium">
          {formattedTime + " " + Utils.getCurrentTimeEmoji(new Date())}
        </p>
        <p className="text-lg">{props.bottom}</p>
      </div>
    </div>
  );
}
