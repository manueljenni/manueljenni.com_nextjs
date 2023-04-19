"use client";
import { useEffect, useState } from "react";
import Utils from "../Utils";
import BoxThree from "./BoxThree";

export default function CurrentStats(props: any) {
  const nextFlight = props.nextFlight;
  const currentLocation = props.currentLocation;
  const pastFlight = props.pastFlight;
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 500);
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <>
        {(nextFlight && (
          <>
            <BoxThree
              top="Manuel is currently in"
              main={currentLocation.city}
              bottom={currentLocation.country}
            />
            <BoxThree
              top="Next upcoming flight to"
              main={nextFlight.arrival.city + " (" + nextFlight.arrival.iata + ") ✈️"}
              bottom={Utils.getRemainingDaysAsText(nextFlight.departureTime)}
            />
          </>
        )) || (
          <>
            <BoxThree
              top="Manuel is currently in"
              main={currentLocation.city}
              bottom={currentLocation.country}
            />
            <BoxThree
              top="Last flight was to"
              main={pastFlight.arrival.city + " (" + pastFlight.arrival.iata + ") ✈️"}
              bottom={Utils.getPastDaysAsText(pastFlight.departureTime)}
            />
          </>
        )}
        <BoxThree
          top="Manuel's current time is"
          main={time.toLocaleTimeString() + " " + Utils.getCurrentTimeEmoji(new Date())}
          bottom={"in " + currentLocation.city}
        />
      </>
    </div>
  );
}
