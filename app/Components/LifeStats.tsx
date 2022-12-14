import React from "react";
import Utils from "../Utils";

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
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">Next upcoming flight to</p>
              <p className="text-2xl font-medium">
                {nextFlight.arrival.city} ({nextFlight.arrival.iata})
              </p>
              <p className="text-lg">
                {Utils.getRemainingDaysAsText(nextFlight.departureTime)}
              </p>
            </div>
          </div>
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">This year</p>
              <p className="text-2xl font-medium">
                {currentFlightStats.flightsCount} flights
              </p>
              <p className="text-lg">taken</p>
            </div>
          </div>
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">This year</p>
              <p className="text-2xl font-medium">
                {Utils.formatMilesToKilometers(
                  currentFlightStats.distance
                ).toLocaleString()}{" "}
                km
              </p>
              <p className="text-lg">
                flown ({Utils.convertSecondsToHours(currentFlightStats.duration)} h)
              </p>
            </div>
          </div>
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">In {lastYear}</p>
              <p className="text-2xl font-medium">
                {pastFlightStats.flightsCount} flights
              </p>
              <p className="text-lg">taken</p>
            </div>
          </div>
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">In {lastYear}</p>
              <p className="text-2xl font-medium">
                {Utils.formatMilesToKilometers(pastFlightStats.distance).toLocaleString()}{" "}
                km
              </p>
              <p className="text-lg">
                flown ({Utils.convertSecondsToHours(pastFlightStats.duration)} h)
              </p>
            </div>
          </div>
          <div className="centerDiv rounded-lg p-4 ring-1 ring-neutral-300">
            <div className="space-y-1 text-center">
              <p className="text-lg">In {lastYear}, spent</p>
              <p className="text-2xl font-medium">{daysSpentAbroad} days</p>
              <p className="text-lg">
                abroad ({Utils.percentageOfYear(daysSpentAbroad)}%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
