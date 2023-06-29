import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlaneTicket(props: {
  departureAirportIata: string;
  departureAirportName: string;
  arrivalAirportIata: string;
  arrivalAirportName: string;
  airlineName: string;
  flightNumber: string;
  bookingClass: string;
  seatNumber: string;
  duration: string;
  distance: string;
}) {
  return (
    <div className="hover rounded-lg bg-neutral-200 shadow-sm">
      <div className="flex items-center justify-between rounded-t-lg bg-main px-6 py-2 text-sm font-medium">
        <p>{props.airlineName}</p>
        <p>{props.flightNumber}</p>
      </div>
      <div className="flex items-center justify-between px-6 pt-6">
        <div className="space-y-1 text-left">
          <h1 className="text-xl font-medium">{props.departureAirportIata}</h1>
          <p className="text-xs">{props.departureAirportName}</p>
        </div>
        <FontAwesomeIcon icon={faPlane} className="text-lg text-main" />
        <div className="space-y-1 text-right">
          <h1 className="text-xl font-medium">{props.arrivalAirportIata}</h1>
          <p className="text-xs">{props.arrivalAirportName}</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 px-6 py-4 text-sm">
        <p className="text-left">{props.bookingClass}</p>
        <p className="text-center">
          {props.duration} - {props.distance}
        </p>
        <p className="text-right">{props.seatNumber}</p>
      </div>
    </div>
  );
}
