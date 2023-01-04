import React from "react";
import fetchData from "../fetchData";
import Utils from "../Utils";
import BoxThree from "./BoxThree";
import CurrentStats from "./CurrentStats";
import FlightsTable from "./FlightsTable";
import Link from "next/link";

export default async function LifeStats(props: any) {
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

  const allUpcomingFlights = await fetchData.getUpcomingFlights();
  var pastFlights = await fetchData.getPastFlights();
  pastFlights = pastFlights.filter((flight: any) => new Date(flight.departureTime) >= new Date("2023-01-01") && new Date(flight.departureTime) <= new Date("2023-12-31"));

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <CurrentStats nextFlight={props.upcomingFlight} />
        <div className="space-y-2">
          <p className="text-2xl font-medium">Travel</p>
          <div className="space-y-4">
            <YearlyStats
              year={thisYear}
              distance={currentFlightStats.distance}
              flightsCount={currentFlightStats.flightsCount}
              daysAbroad={2}
            />
            <YearlyStats
              year={lastYear}
              distance={pastFlightStats.distance}
              flightsCount={pastFlightStats.flightsCount}
              daysAbroad={215}
            />
            <YearlyStats
              year={lastLastYear}
              distance={pastPastFlightStats.distance}
              flightsCount={pastPastFlightStats.flightsCount}
              daysAbroad={94}
            />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-medium">Upcoming flights</p>
          <div className="space-y-4">
            <FlightsTable flights={allUpcomingFlights} />
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-medium">Past flights</p>
          <div className="space-y-4">
            <FlightsTable flights={pastFlights} />
          </div>
        </div>
        <p className="text-lg accentText"><Link href="/flights">View all flights (2021 - 2023) →</Link></p>
      </div>
    </div>
  );
}

function YearlyStats(props: any) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{props.year}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BoxThree
          top={"In " + props.year}
          main={props.flightsCount + " flights"}
          bottom="taken"
        />
        <BoxThree
          top={"In " + props.year}
          main={Utils.formatMilesToKilometers(props.distance).toLocaleString() + " km"}
          bottom="flown"
        />
        <BoxThree
          top={"In " + props.year + ", spent"}
          main={props.daysAbroad + " days"}
          bottom={"abroad (" + Utils.percentageOfYear(props.daysAbroad) + "%)"}
        />
      </div>
    </div>
  );
}
