import React from "react";
import CurrentStats from "../Components/CurrentStats";
import fetchData from "../fetchData";
import Link from "next/link";

export default async function LifeStatsSection() {
  var upcomingFlight = await fetchData.getUpcomingFlights();
  return (
    <div className="space-y-8">
      <Link href="/lifestats">
        <h1 className="text-3xl font-medium">LifeStats</h1>
      </Link>
      {upcomingFlight && <CurrentStats nextFlight={upcomingFlight[0]} />}
    </div>
  );
}
