import React from 'react'
import FlightsTable from '../Components/FlightsTable'
import fetchData from '../fetchData'

export default async function page() {
    var upcomingFlights = await fetchData.getUpcomingFlights();
    var pastFlights = await fetchData.getPastFlights();

    var thisYear = new Date().getFullYear();
    var pastThisYear = pastFlights.filter((flight: any) => new Date(flight.departureTime) > new Date(thisYear, 0, 1, 1));
    var flights2022 = pastFlights.filter((flight: any) => new Date(flight.departureTime) > new Date("2022-01-01") && new Date(flight.departureTime) < new Date("2023-01-01"));
    var flights2021 = pastFlights.filter((flight: any) => new Date(flight.departureTime) > new Date("2021-01-01") && new Date(flight.departureTime) < new Date("2022-01-01"));

    return (
        <div className='space-y-8'>
            <div className='space-y-4'>
                <h1 className="text-3xl font-medium">Flights</h1>
                <p className='text-lg'>I fly pretty regularly - these are the flights I've taken. Click to see more information!</p>
            </div>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">Upcoming</h3>
                    <FlightsTable flights={upcomingFlights} />
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">{thisYear}</h3>
                    <FlightsTable flights={pastThisYear} />
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">2022</h3>
                    <FlightsTable flights={flights2022} />
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium">2021</h3>
                    <FlightsTable flights={flights2021} />
                </div>
            </div>
        </div>
    )
}
