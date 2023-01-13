"use client"
import React from 'react'
import MapboxMap, { Marker } from 'react-map-gl';

export default function Map(props: any) {
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
        </MapboxMap >
    )
}
