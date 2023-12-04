import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import DestinationMarker from "./DestinationMarker";
import DesktopStatistics from "../components/DesktopStatistics";

function MapD({isMobileSize}) {
  const [currentPosition, setCurrentPosition] = useState(null);
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
    <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', width: '100%'}}>
    { isMobileSize && <DesktopStatistics />}
      {currentPosition && (
        <MapContainer
          center={{ lat: currentPosition.lat, lng: currentPosition.lng }}
          zoom={16}
          zoomControl={false}
          scrollWheelZoom={true}
          closePopupOnClick={false}
          style={{
            width: `${!isMobileSize ? '100%' : '50%'}`,
            height: "100%",
          }}
          
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={currentPosition}>
            <Popup>{currentPosition.popup}</Popup>
          </Marker>
          <DestinationMarker currentPosition={currentPosition} />
        </MapContainer>
      )}
    </div>
  );
}
export default MapD;
