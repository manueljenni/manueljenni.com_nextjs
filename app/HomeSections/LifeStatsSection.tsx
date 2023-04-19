import Link from "next/link";
import CurrentStats from "../Components/CurrentStats";
import fetchData from "../fetchData";

export default async function LifeStatsSection() {
  var upcomingFlight = await fetchData.getUpcomingFlights();
  var pastFlight = await fetchData.getPastFlights();
  var nomadList = await fetchData.fetchNomadList();
  return (
    <div className="space-y-8">
      <Link href="/lifestats">
        <h1 className="text-3xl font-medium">LifeStats</h1>
      </Link>
      {upcomingFlight && (
        <CurrentStats
          nextFlight={upcomingFlight[0]}
          pastFlight={pastFlight[0]}
          currentLocation={nomadList.location.now}
        />
      )}
    </div>
  );
}
