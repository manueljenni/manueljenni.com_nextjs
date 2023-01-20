import React from "react";
import fetchData from "../fetchData";
import LifeStats from "../Components/LifeStats";

export default async function page() {
  var lifeStats = await fetchData.fetchLifeStats();
  var allUpcomingFlights = await fetchData.getUpcomingFlights();
  var pastFlights = await fetchData.getPastFlights();
  const nomadList = await fetchData.fetchNomadList();
  pastFlights = pastFlights.filter(
    (flight: any) =>
      new Date(flight.departureTime) >= new Date("2023-01-01") &&
      new Date(flight.departureTime) <= new Date("2023-12-31")
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-medium">LifeStats</h1>
      <LifeStats
        lifeStats={lifeStats}
        upcomingFlights={allUpcomingFlights}
        pastFlights={pastFlights}
        currentLocation={nomadList.location.now}
      />
    </div>
  );
}
