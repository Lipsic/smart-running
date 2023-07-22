import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import LocationMarker from "./LocationMarker";
// import NewLocationMarker from "./newLocationMarker";

function MapD() {
  const [currentPosition, setCurrentPosition] = useState(null);

  // posição atual
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          popup: "posição atual",
        });
      });
    }
  }, []);

  return (
    <>
      {currentPosition && (
        <MapContainer
          center={{ lat: currentPosition.lat, lng: currentPosition.lng }}
          zoom={16}
          zoomControl={false}
          scrollWheelZoom={true}
          closePopupOnClick={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )}
    </>
  );
}
export default MapD;