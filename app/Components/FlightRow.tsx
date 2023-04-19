"use client";
import Utils from "../Utils";
import useWindowDimensions from "../WindowDimensions";

export default function FlightRow(props: any) {
  var flight = props.flight;
  var { width } = { width: 1200 };
  if (typeof window != "undefined") {
    var { width } = useWindowDimensions();
  }

  if (width > 1000) {
    return (
      <div
        key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata}
        className="table-row odd:bg-gray-200 hover:cursor-pointer"
        onClick={() => window.open(flight.milewaysUrl)}>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
          {Utils.parseDate(flight.departureTime)}
          <br />
          <p className="text-base text-gray-400">
            {Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}
          </p>
        </div>
        <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
          <b>{flight.departure.city}</b>{" "}
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
            {flight.airline.code} {flight.flightNumber}
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
    return (
      <div
        key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata}
        className="table-row odd:bg-gray-200 hover:cursor-pointer"
        onClick={() => window.open(flight.milewaysUrl)}>
        <div className="table-cell px-4 py-4 text-xl">
          <span className="text-lg text-gray-400">
            {Utils.parseDate(flight.departureTime)}
          </span>
          <br />
          <b>{flight.departure.city}</b> ({flight.departure.iata})<br />
          <span className="text-base text-gray-400">
            {Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}
          </span>
        </div>
        <div className="table-cell px-4 py-4 text-xl">
          <span className="text-lg text-gray-400">
            {Utils.parseDate(flight.arrivalTime)}
          </span>
          <br />
          <b>{flight.arrival.city}</b> ({flight.arrival.iata})<br />
          <span className="text-base text-gray-400">
            {Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}
          </span>
        </div>
      </div>
    );
  }
}
