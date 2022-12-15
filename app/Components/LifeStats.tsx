import React from "react";
import Utils from "../Utils";
import BoxThree from "./BoxThree";

export default function LifeStats(props: any) {
  var lifeStats = props.lifeStats;
  var currentFlightStats = lifeStats.statsByYear.filter(
    (obj: any) => obj.year == new Date().getFullYear()
  )[0];
  var pastFlightStats = lifeStats.statsByYear.filter(
    (obj: any) => obj.year == new Date().getFullYear() - 1
  )[0];

  var nextFlight = props.upcomingFlight;

  var thisYear = new Date().getFullYear();
  var lastYear = thisYear - 1;

  var daysSpentAbroad = 250;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl font-medium">Travel</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BoxThree
            top="Next upcoming flight to"
            main={nextFlight.arrival.city + " (" + nextFlight.arrival.iata + ")"}
            bottom={Utils.getRemainingDaysAsText(nextFlight.departureTime)}
          />
          <BoxThree
            top="This year"
            main={currentFlightStats.flightsCount + " flights"}
            bottom="taken"
          />
          <BoxThree
            top="This year"
            main={Utils.formatMilesToKilometers(currentFlightStats.distance).toLocaleString() + " km"}
            bottom="flown"
          />
          <BoxThree
            top={"In " + lastYear}
            main={Utils.formatMilesToKilometers(pastFlightStats.flightsCount).toLocaleString() + " flights"}
            bottom="taken"
          />
          <BoxThree
            top={"In " + lastYear}
            main={Utils.formatMilesToKilometers(pastFlightStats.distance).toLocaleString() + " km"}
            bottom="flown"
          />
          <BoxThree
            top={"In " + lastYear + ", spent"}
            main={daysSpentAbroad + " days"}
            bottom={"abroad (" + Utils.percentageOfYear(daysSpentAbroad) + "%)"}
          />
        </div>
      </div>
    </div>
  );
}
