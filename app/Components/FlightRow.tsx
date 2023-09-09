"use client";
import Utils from "../Utils";
import useWindowDimensions from "../WindowDimensions";

export default function FlightRow(props: any) {
  var flight = props.flight;

  var { width, height, isLoading } = { width: 390, height: 800, isLoading: true };
  if (typeof window != "undefined") {
    var { width, isLoading } = useWindowDimensions();
  }

  if (width > 1000) {
    if (isLoading) {
      return (
        <div className="table-row odd:bg-gray-200 hover:cursor-pointer odd:dark:bg-dark-light">
          <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell whitespace-nowrap px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell px-4 py-4 text-lg">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell whitespace-nowrap px-4 py-4 text-lg">
            <div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell whitespace-nowrap px-4 py-4 text-lg">
            <div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-12 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
      );
    } else {
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
    }
  } else {
    if (isLoading) {
      return (
        <div className="table-row odd:bg-gray-200 hover:cursor-pointer odd:dark:bg-dark-light">
          <div className="table-cell px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>

          <div className="table-cell px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
          <div className="table-cell px-4 py-4 text-xl">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-300"></div>
            <br />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata}
          className="table-row odd:bg-gray-200 hover:cursor-pointer odd:dark:bg-dark-light"
          onClick={() => window.open(flight.milewaysUrl)}>
          <div className="table-cell px-4 py-4 text-xl">
            <span className="text-lg text-gray-400">
              {Utils.parseDate(flight.departureTime)}
            </span>
            <br />
            <b>{flight.departure.city}</b>
            <br />({flight.departure.iata})<br />
            <span className="text-base text-gray-400">
              {Utils.getDepartureArrivalTime(
                flight.departureTime,
                flight.departure.timeZoneName,
                flight.arrivalTime,
                flight.arrival.timeZoneName,
              )}
            </span>
          </div>
          <div className="table-cell px-4 py-4 text-xl">
            <span className="text-lg text-gray-400">
              {Utils.parseDate(flight.arrivalTime)}
            </span>
            <br />
            <b>{flight.arrival.city}</b>
            <br />({flight.arrival.iata})<br />
            <span className="text-base text-gray-400">
              {flight.airline.iata} {flight.flightNumber}
            </span>
          </div>
        </div>
      );
    }
  }

  /*
  
        */
}
