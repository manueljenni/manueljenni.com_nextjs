"use client";
import useWindowDimensions from "../WindowDimensions";

export default function FlightsTable(props: any) {
  var flights = props.flights;
  var { width } = { width: 1200 };
  if (typeof window !== "undefined") {
    var { width } = useWindowDimensions();
  }

  return <p>Currently unavailable</p>;
  /*
  if (width > 1000) {
    return (
      <div className="table w-full table-fixed rounded-lg border">
        <div className="table-header-group">
          <div className="table-row text-base">
            <div className="table-cell w-2/12 px-4 py-4">Date</div>
            <div className="table-cell w-2/12 px-4 py-4">Origin</div>
            <div className="table-cell w-2/12 px-4 py-4">Destination</div>
            <div className="table-cell w-2/12 px-4 py-4">Airline</div>
            <div className="table-cell w-1/12 px-4 py-4">Distance</div>
            <div className="table-cell w-1/12 px-4 py-4">Duration</div>
          </div>
        </div>
        <div className="table-row-group">
          {flights &&
            flights.map((flight: any) => (
              <FlightRow flight={flight} key={flight.milewaysUrl} id={flight.id} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="table w-full table-fixed rounded-lg border">
        <div className="table-header-group">
          <div className="table-row text-base">
            <div className="table-cell px-4 py-4">Origin</div>
            <div className="table-cell px-4 py-4">Destination</div>
          </div>
        </div>
        <div className="table-row-group">
          {flights &&
            flights.map((flight: any) => (
              <FlightRow flight={flight} key={flight.milewaysUrl} id={flight.id} />
            ))}
        </div>
      </div>
    );
  }
  */
}
