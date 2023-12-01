import { useEffect, useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import kmDistance from "./kmDistance";

function DestinationMarker({ currentPosition }) {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      // map.flyTo(e.latlng, map.getZoom());
    },
  });

  function onMapClick(e) {
    setPosition(e.latlng);
  }

  map.on("click", onMapClick);
  let distance = 0;

  if (
    currentPosition?.lat !== undefined &&
    currentPosition?.lng !== undefined &&
    position?.lng !== undefined &&
    position?.lat !== undefined
  ) {
    distance = kmDistance(
      currentPosition.lat,
      currentPosition.lng,
      position.lat,
      position.lng
    );
  }

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <div>
          <p>You are going to here</p>
          <p>
            at{" "}
            <strong>
              {kmDistance(
                currentPosition.lat,
                currentPosition.lng,
                position.lat,
                position.lng
              ).toFixed(1)}
            </strong>{" "}
            km from where you are
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

export default DestinationMarker;
