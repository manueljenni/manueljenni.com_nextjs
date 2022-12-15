import React from "react";
import LifeStats from "../Components/LifeStats";
import fetchData from "../fetchData";
import Link from "next/link";

export default async function LifeStatsSection() {
  var lifeStats = await fetchData.fetchLifeStats();
  var upcomingFlight = await fetchData.getUpcomingFlights();
  return (
    <div className="space-y-8">
      <Link href="/lifestats"><h1 className="text-3xl font-medium">LifeStats</h1></Link>
      <LifeStats lifeStats={lifeStats} upcomingFlight={upcomingFlight[0]} />
    </div>
  );
}
