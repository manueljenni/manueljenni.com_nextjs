'use client';
import Utils from '../Utils';
import BoxThree from './BoxThree';
import BoxThreeClock from './BoxThreeClock';

export default function CurrentStats(props: any) {
  const nextFlight = props.nextFlight;
  const currentLocation = props.currentLocation;
  const pastFlight = props.pastFlight;

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <>
        {(nextFlight && (
          <>
            <BoxThree
              top='Manuel is currently in'
              main={currentLocation.city}
              bottom={currentLocation.country}
            />
            <BoxThree
              top='Next upcoming flight to'
              main={
                nextFlight.arrival.city +
                ' (' +
                nextFlight.arrival.iata +
                ') ✈️'
              }
              bottom={Utils.getRemainingDaysAsText(nextFlight.departureTime)}
            />
          </>
        )) || (
          <>
            <BoxThree
              top='Manuel is currently in'
              main={currentLocation.city}
              bottom={currentLocation.country}
            />
            <BoxThree
              top='Last flight was to'
              main={
                pastFlight.arrival.city +
                ' (' +
                pastFlight.arrival.iata +
                ') ✈️'
              }
              bottom={Utils.getPastDaysAsText(pastFlight.departureTime)}
            />
          </>
        )}
        <BoxThreeClock
          top="Manuel's current time is"
          bottom={'in ' + currentLocation.city}
        />
      </>
    </div>
  );
}
