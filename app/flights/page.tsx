import { Suspense } from "react";
import FlightsTable from "../Components/FlightsTable";
import Map from "../Components/Map";
import fetchData from "../fetchData";

export default async function page() {
  const locations = await fetchData.getAllLocations();
  const upcomingRoutes = await fetchData.fetchAllUpcomingRoutes();
  const pastRoutes = await fetchData.fetchAllPastRoutes();
  var upcomingFlights = await fetchData.getUpcomingFlights();
  console.warn("upcomingFlights", upcomingFlights);
  var pastFlights = await fetchData.getPastFlights();

  var thisYear = new Date().getFullYear();
  var pastThisYear = pastFlights.filter(
    (flight: any) => new Date(flight.departureTime) > new Date(thisYear, 0, 1, 1),
  );
  var flights2023 = pastFlights.filter(
    (flight: any) =>
      new Date(flight.departureTime) > new Date("2023-01-01") &&
      new Date(flight.departureTime) < new Date("2024-01-01"),
  );

  var flights2022 = pastFlights.filter(
    (flight: any) =>
      new Date(flight.departureTime) > new Date("2022-01-01") &&
      new Date(flight.departureTime) < new Date("2023-01-01"),
  );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium">Flights</h1>
        <p className="text-lg">
          I fly pretty regularly - these are the flights I've taken. Click to see more
          information!
        </p>
      </div>
      <div className="space-y-8">
        {upcomingFlights.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Upcoming</h3>
            <FlightsTable flights={upcomingFlights} />
          </div>
        )}
        <div className="w-full overflow-hidden rounded-lg border">
          <Map
            locations={locations}
            upcomingRoutes={upcomingRoutes}
            pastRoutes={pastRoutes}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">{thisYear}</h3>
          <Suspense fallback={"Loading..."}>
            <FlightsTable flights={pastThisYear} />
          </Suspense>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">2023</h3>
          <FlightsTable flights={flights2023} />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">2022</h3>
          <FlightsTable flights={flights2022} />
        </div>
      </div>
    </div>
  );
}
