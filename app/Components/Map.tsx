"use client"
import React from 'react'
import MapboxMap, { Marker, Source, Layer } from 'react-map-gl';
const arc = require('arc');

export default function Map(props: any) {

    const upcomingRoutes: any = {
        "type": "FeatureCollection",
        "features": props.upcomingRoutes.map((route: any) => generateGreatCircleGeoJSON(
            { x: route.departureLongitude, y: route.departureLatitude },
            { x: route.arrivalLongitude, y: route.arrivalLatitude }
        )),
    };

    const pastRoutes: any = {
        "type": "FeatureCollection",
        "features": props.pastRoutes.map((route: any) => generateGreatCircleGeoJSON(
            { x: route.departureLongitude, y: route.departureLatitude },
            { x: route.arrivalLongitude, y: route.arrivalLatitude }
        )),
    };

    return (
        <MapboxMap
            initialViewState={{
                longitude: 8,
                latitude: 47,
                zoom: 1.8
            }}
            style={{ "height": "500px" }}
            mapStyle="mapbox://styles/manuelnoahjenni/ckvi68nsgiypn14s7uppns39h"
            mapboxAccessToken='pk.eyJ1IjoibWFudWVsbm9haGplbm5pIiwiYSI6ImNrdmk2N2NhazAyajgycG52Y2l5N2p5MGYifQ.ZHY3Gijy7ldNBUzPKlA2mg'
            projection={"globe"}
        >
            {
                props.locations.map((location: any) =>
                    <Marker longitude={location.longitude} latitude={location.latitude} color='#85c4d5' />
                )
            }
            <Source type="geojson" data={pastRoutes} key="2">
                <Layer
                    id='lineLayer2'
                    type='line'
                    source='my-data'
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round',
                    }}
                    paint={{
                        'line-color': 'rgb(255, 255, 255)',
                        'line-width': 4,
                    }}
                />
            </Source>
            <Source type="geojson" data={upcomingRoutes}>
                <Layer
                    id='lineLayer'
                    type='line'
                    source='my-data'
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round',
                    }}
                    paint={{
                        'line-color': 'rgb(84, 84, 84)',
                        'line-width': 4,
                    }}
                />
            </Source>
        </MapboxMap >
    )
}

function generateGreatCircleGeoJSON(start: any, end: any) {
    let generator = new arc.GreatCircle(start, end, { 'name': "name" });
    return generator.Arc(10, { offset: 20 }).json();
}
