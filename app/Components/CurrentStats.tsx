import React from "react";
import BoxThree from "./BoxThree";
import Utils from "../Utils";

export default function CurrentStats(props: any) {
  const nextFlight = props.nextFlight;
  const currentLocation = props.currentLocation;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {nextFlight && (
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
          <BoxThree
            top="Manuel's current time is"
            main={
              new Date().toLocaleTimeString() +
              " " +
              Utils.getCurrentTimeEmoji(new Date())
            }
            bottom={"in " + currentLocation.city}
          />
        </>
      )}
    </div>
  );
}
