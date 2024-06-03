"use client";

import "./googlemaps.css";
import React, { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const GoogleMaps = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  const mapid = process.env.REACT_APP_MAP_ID;
  const hospitalAddress = "4017 Garret Rd, Drexel Hill, United States";
  useEffect(() => {
    fetchCoordinates(hospitalAddress);
  }, []);

  const fetchCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const location = data.results[0].geometry.location;
        setPosition({ lat: location.lat, lng: location.lng });
        setAddress(data.results[0].formatted_address);
      } else {
        console.error("Geocode error: ", data.status);
      }
    } catch (error) {
      console.error("Error fetching coordinates: ", error);
    }
  };

  const mapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    draggable: true,
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "100%", height: "100%" }}>
        <Map zoom={17} center={position} mapId={mapid} options={mapOptions}>
          <AdvancedMarker position={position}></AdvancedMarker>
          {/* {address && (
            <InfoWindow position={position}>
              <div>
                <h3 style={{ color: "black" }}>Address:</h3>
                <p style = {{color: "black"}}>{address}</p>
              </div>
            </InfoWindow>
          )} */}
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMaps;
