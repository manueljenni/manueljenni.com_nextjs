"use client";
import React from 'react'
import useWindowDimensions from '../WindowDimensions';
import Utils from '../Utils';

export default function FlightRow(props: any) {
    var flight = props.flight;
    const { width } = { width: 1000 };
    if (typeof window != 'undefined') {
        const { width } = useWindowDimensions();
    }

    if (width > 1000) {
        return (
            <div key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata} className="table-row odd:bg-gray-200 hover:cursor-pointer" onClick={() => window.open(flight.milewaysUrl)}>
                <div className="table-cell text-xl px-4 py-4 whitespace-nowrap">{Utils.parseDate(flight.departureTime)}<br /><p className="text-base text-gray-400">{Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}</p></div>
                <div className="table-cell text-xl px-4 py-4 whitespace-nowrap"><b>{flight.departure.city}</b> <span className="text-base">({flight.departure.iata})</span><br /><p className="text-base text-gray-400">{flight.departure.countryName}</p></div>
                <div className="table-cell text-xl px-4 py-4 whitespace-nowrap"><b>{flight.arrival.city}</b> <span className="text-base">({flight.arrival.iata})</span><br /><p className="text-base text-gray-400">{flight.arrival.countryName}</p></div>
                <div className="table-cell text-lg px-4 py-4">{flight.airline.name}<br /><p className="text-base text-gray-400">{flight.airline.code} {flight.flightNumber}</p></div>
                <div className="table-cell text-lg px-4 py-4 whitespace-nowrap">{Math.round((flight.miles * 1.852))} km<br /><p className="text-base text-gray-400">{flight.miles} nmi</p></div>
                <div className="table-cell text-lg px-4 py-4 whitespace-nowrap">{Math.round((flight.duration / 3600) * 100) / 100} h</div>
            </div>
        )
    } else {
        return (
            <div key={flight.departureTime + "_" + flight.departure_iata + flight.arrival_iata} className="table-row odd:bg-gray-200 hover:cursor-pointer" onClick={() => window.open(flight.milewaysUrl)}>
                <div className="table-cell text-xl px-4 py-4 whitespace-nowrap"><span className="text-gray-400 text-lg">{Utils.parseDate(flight.departureTime)}</span><br /><b>{flight.departure.city}</b> ({flight.departure.iata})<br /><span className="text-base text-gray-400">{Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}</span></div>
                <div className="table-cell text-xl px-4 py-4 whitespace-nowrap"><span className="text-gray-400 text-lg">{Utils.parseDate(flight.arrivalTime)}</span><br /><b>{flight.arrival.city}</b> ({flight.arrival.iata})<br /><span className="text-base text-gray-400">{Utils.getDepartureArrivalTime(flight.departureTime, flight.arrivalTime)}</span></div>
            </div>
        )
    }
}
