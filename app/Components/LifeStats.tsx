import { FLIGHT_MANIFEST } from "next/dist/shared/lib/constants";
import React from "react";
import Utils from "../Utils";
import BoxThree from "./BoxThree";

export default function LifeStats(props: any) {
  var thisYear = new Date().getFullYear();
  var lastYear = thisYear - 1;
  var lastLastYear = thisYear - 2;

  var lifeStats = props.lifeStats;
  var currentFlightStats = lifeStats.statsByYear.filter(
    (obj: any) => obj.year == thisYear
  )[0];
  var pastFlightStats = lifeStats.statsByYear.filter(
    (obj: any) => obj.year == lastYear
  )[0];
  var pastPastFlightStats = lifeStats.statsByYear.filter(
    (obj: any) => obj.year == lastLastYear
  )[0];

  var nextFlight = props.upcomingFlight;

  // TODO: Implement proper daysSpentAbroad
  var daysSpentAbroad = 250;

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BoxThree
                  top="Manuel is currently in"
                  main={nextFlight.departure.city}
                  bottom={nextFlight.departure.countryName}
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
                  bottom={"in " + nextFlight.departure.city}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-medium">Travel</p>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-lg font-medium">{thisYear}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BoxThree
                  top="This year"
                  main={currentFlightStats.flightsCount + " flights"}
                  bottom="taken"
                />
                <BoxThree
                  top="This year"
                  main={
                    Utils.formatMilesToKilometers(
                      currentFlightStats.distance
                    ).toLocaleString() + " km"
                  }
                  bottom="flown"
                />
                <BoxThree
                  top={"In " + lastYear + ", spent"}
                  main={daysSpentAbroad + " days"}
                  bottom={"abroad (" + Utils.percentageOfYear(daysSpentAbroad) + "%)"}
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium">{lastYear}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BoxThree
                  top={"In " + lastYear}
                  main={
                    Utils.formatMilesToKilometers(
                      pastFlightStats.flightsCount
                    ).toLocaleString() + " flights"
                  }
                  bottom="taken"
                />
                <BoxThree
                  top={"In " + lastYear}
                  main={
                    Utils.formatMilesToKilometers(
                      pastFlightStats.distance
                    ).toLocaleString() + " km"
                  }
                  bottom="flown"
                />
                <BoxThree
                  top={"In " + lastYear + ", spent"}
                  main={daysSpentAbroad + " days"}
                  bottom={"abroad (" + Utils.percentageOfYear(daysSpentAbroad) + "%)"}
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium">{lastLastYear}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <BoxThree
                  top={"In " + lastLastYear}
                  main={
                    Utils.formatMilesToKilometers(
                      pastPastFlightStats.flightsCount
                    ).toLocaleString() + " flights"
                  }
                  bottom="taken"
                />
                <BoxThree
                  top={"In " + lastLastYear}
                  main={
                    Utils.formatMilesToKilometers(
                      pastPastFlightStats.distance
                    ).toLocaleString() + " km"
                  }
                  bottom="flown"
                />
                <BoxThree
                  top={"In " + lastLastYear + ", spent"}
                  main={"4 days"}
                  bottom={"abroad (" + Utils.percentageOfYear(4) + "%)"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
