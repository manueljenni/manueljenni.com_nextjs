"use client";
import Utils from "../Utils";
import useWindowDimensions from "../WindowDimensions";

export default function FlightRow(props: any) {
  var flight = props.flight;
  var { width, height, isLoading } = { width: 1200, height: 800, isLoading: true };
  if (typeof window != "undefined") {
    var { width, isLoading } = useWindowDimensions();
  }

  if (isLoading) {
    return;
  }

  if (width > 1000) {
    return (
      <div
        key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata}
        className="table-row odd:bg-gray-200 hover:cursor-pointer odd:dark:bg-dark-light"
        onClick={() => window.open(flight.milewaysUrl)}>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
          {Utils.parseDate(flight.departureTime)}
          <br />
          <p className="text-base text-gray-400">
            {Utils.getDepartureArrivalTime(
              flight.departureTime,
              flight.departure.timeZoneName,
              flight.arrivalTime,
              flight.arrival.timeZoneName,
            )}
          </p>
        </div>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
          <b>{flight.departure.city.split(",")[0]}</b>{" "}
          <span className="text-base">({flight.departure.iata})</span>
          <br />
          <p className="text-base text-gray-400">{flight.departure.countryName}</p>
        </div>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
          <b>{flight.arrival.city}</b>{" "}
          <span className="text-base">({flight.arrival.iata})</span>
          <br />
          <p className="text-base text-gray-400">{flight.arrival.countryName}</p>
        </div>
        <div className="table-cell px-4 py-4 text-lg">
          {flight.airline.name}
          <br />
          <p className="text-base text-gray-400">
            {flight.airline.iata} {flight.flightNumber}
          </p>
        </div>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-lg">
          {Math.round(flight.miles * 1.852)} km
          <br />
          <p className="text-base text-gray-400">{flight.miles} nmi</p>
        </div>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-lg">
          {Math.round((flight.duration / 3600) * 100) / 100} h
        </div>
      </div>
    );
  } else {
  }
}
