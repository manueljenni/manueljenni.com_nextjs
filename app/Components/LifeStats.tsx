import Link from "next/link";
import Utils from "../Utils";
import BoxThree from "./BoxThree";
import CurrentStats from "./CurrentStats";
import FlightsTable from "./FlightsTable";

export default function LifeStats(props: any) {
  var thisYear = new Date().getFullYear();
  var lastYear = thisYear - 1;
  var lastLastYear = thisYear - 2;

  var lifeStats = props.lifeStats;
  var currentFlightStats = lifeStats.filter(
    (obj: any) => new Date(obj.year).getFullYear() == thisYear,
  )[0];
  var pastFlightStats = lifeStats.filter(
    (obj: any) => new Date(obj.year).getFullYear() == lastYear,
  )[0];
  var pastPastFlightStats = lifeStats.filter(
    (obj: any) => new Date(obj.year).getFullYear() == lastLastYear,
  )[0];

  const upcomingFlights = props.upcomingFlights;
  const pastFlights = props.pastFlights;

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <CurrentStats
          nextFlight={upcomingFlights[0]}
          pastFlight={pastFlights[0]}
          currentLocation={props.currentLocation}
        />
        <div className="space-y-2">
          <p className="text-2xl font-medium">Travel</p>
          <div className="space-y-4">
            <YearlyStats
              year={thisYear}
              distance={currentFlightStats.distance}
              flightsCount={currentFlightStats.flightsCount}
              daysAbroad={Utils.getDaysOfCurrentYear() - 19}
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
        {upcomingFlights.length > 0 && (
          <div className="space-y-6">
            <p className="text-2xl font-medium">Upcoming flights</p>
            <div className="space-y-4">
              <FlightsTable flights={upcomingFlights} />
            </div>
          </div>
        )}
        <div className="space-y-6">
          <p className="text-2xl font-medium">Past flights</p>
          <div className="space-y-4">
            <FlightsTable flights={pastFlights} />
          </div>
        </div>
        <p className="accentText text-lg">
          <Link href="/flights">View all flights (2021 - 2023) →</Link>
        </p>
      </div>
    </div>
  );
}

function YearlyStats(props: any) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-medium">{props.year}</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          bottom={
            "abroad (" + Utils.percentageOfYear(props.daysAbroad, props.year) + "%)"
          }
        />
      </div>
    </div>
  );
}
