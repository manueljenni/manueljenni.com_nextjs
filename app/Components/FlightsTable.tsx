"use client";
import React from 'react'
import FlightRow from './FlightRow';
import useWindowDimensions from '../WindowDimensions';

export default function FlightsTable(props: any) {
    var flights = props.flights;

    const { width } = { width: 1000 };
    if (typeof window != 'undefined') {
        const { width } = useWindowDimensions();
    }

    if (width > 1000) {
        return (
            <div className="table table-fixed w-full rounded-lg border">
                <div className="table-header-group">
                    <div className="table-row text-base">
                        <div className="table-cell w-2/12 px-4 py-4">Date</div>
                        <div className="table-cell w-2/12 px-4 py-4">Origin</div>
                        <div className="table-cell w-2/12 px-4 py-4">Destination</div>
                        <div className="table-cell w-2/12 px-4 py-4">Airline</div>
                        <div className="table-cell w-1/12 px-4 py-4">Distance</div>
                        <div className="table-cell w-1/12 px-4 py-4">Duration</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {flights &&
                        flights.map((flight: any) => <FlightRow flight={flight} key={flight.milewaysUrl} />)
                    }
                </div>
            </div>
        );
    } else {
        return (
            <div className="table table-fixed w-full rounded-lg border">
                <div className="table-header-group">
                    <div className="table-row text-base">
                        <div className="table-cell px-4 py-4">Origin</div>
                        <div className="table-cell px-4 py-4">Destination</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {flights &&
                        flights.map((flight: any) => <FlightRow flight={flight} key={flight.milewaysUrl} />)
                    }
                </div>
            </div>
        );
    }
}
