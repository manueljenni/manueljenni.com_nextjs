import React from 'react'
import fetchData from '../fetchData';
import LifeStats from "../Components/LifeStats";


export default async function page() {
    var lifeStats = await fetchData.fetchLifeStats();
    var upcomingFlight = await fetchData.getUpcomingFlights();
    return (
        <div className="w-full py-24">
            <div className="centerDiv h-full">
                <div className="space-y-16 w-2/3">
                    <div className="space-y-8">
                        <h1 className="text-3xl font-medium">LifeStats</h1>
                        <LifeStats lifeStats={lifeStats} upcomingFlight={upcomingFlight[0]} />
                    </div>
                </div>
            </div>
        </div>

    )
}
