"use client";
import React, { useState } from "react";
import MapboxMap, { Marker, Source, Layer, Popup } from "react-map-gl";
const arc = require("arc");

export default function Map(props: any) {
  const upcomingRoutes: any = {
    type: "FeatureCollection",
    features: props.upcomingRoutes.map((route: any) =>
      generateGreatCircleGeoJSON(
        { x: route.departureLongitude, y: route.departureLatitude },
        { x: route.arrivalLongitude, y: route.arrivalLatitude }
      )
    ),
  };

  const pastRoutes: any = {
    type: "FeatureCollection",
    features: props.pastRoutes.map((route: any) =>
      generateGreatCircleGeoJSON(
        { x: route.departureLongitude, y: route.departureLatitude },
        { x: route.arrivalLongitude, y: route.arrivalLatitude }
      )
    ),
  };

  const [popupInfo, setPopupInfo] = useState<any>(null);
  return (
    <MapboxMap
      initialViewState={{
        longitude: 8,
        latitude: 47,
        zoom: 1.8,
      }}
      style={{ height: "500px" }}
      mapStyle="mapbox://styles/manuelnoahjenni/ckvi68nsgiypn14s7uppns39h"
      mapboxAccessToken="pk.eyJ1IjoibWFudWVsbm9haGplbm5pIiwiYSI6ImNrdmk2N2NhazAyajgycG52Y2l5N2p5MGYifQ.ZHY3Gijy7ldNBUzPKlA2mg"
      projection={"globe"}>
      {props.locations.map((location: any) => (
        <Marker
          longitude={location.longitude}
          latitude={location.latitude}
          color="#85c4d5"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
          }}
        />
      ))}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
          style={{ width: "300px" }}>
          <div className="text-center space-y-1">
            <p className="text-2xl font-medium">
              {popupInfo.city} ({popupInfo.iata})
            </p>
            <p className="text-sm">
              {popupInfo.countryName} ({popupInfo.countryCode})
            </p>
          </div>
          <img width="100%" src={popupInfo.image} />
        </Popup>
      )}

      <Source type="geojson" data={pastRoutes} key="2">
        <Layer
          id="lineLayer2"
          type="line"
          source="my-data"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "rgb(255, 255, 255)",
            "line-width": 4,
          }}
        />
      </Source>
      <Source type="geojson" data={upcomingRoutes}>
        <Layer
          id="lineLayer"
          type="line"
          source="my-data"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "rgb(84, 84, 84)",
            "line-width": 4,
          }}
        />
      </Source>
    </MapboxMap>
  );
}

function generateGreatCircleGeoJSON(start: any, end: any) {
  let generator = new arc.GreatCircle(start, end, { name: "name" });
  return generator.Arc(10, { offset: 20 }).json();
}
