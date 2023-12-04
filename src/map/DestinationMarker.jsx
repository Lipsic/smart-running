import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import kmDistance from "./kmDistance";
import { useAtom } from "jotai";
import { writeOnlyStatistics } from "../store/statistics";

let position = { lat: 0, lng: 0 }

function DestinationMarker({ currentPosition }) {
  const [markerPosition, setMarkerPosition] = useState(position)
  const [_, setStats]= useAtom(writeOnlyStatistics)
  const distance = kmDistance(
       currentPosition.lat,
       currentPosition.lng,
       position.lat,
       position.lng
     ).toFixed(1);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      // map.flyTo(e.latlng, map.getZoom());
    },
  });

  map.on("click", onMapClick);



  function onMapClick(e) {
    position = e.latlng
    setMarkerPosition(e.latlng)
    
  }
  
  setStats({
    distance: distance,
    start: {lat: currentPosition.lat, lng: currentPosition.lng},
    end: {lat: position.lat, lng: position.lng},
    duration: Math.round((distance * 1000) / 82),
  })

  return position === null ? null : (
    <Marker position={markerPosition}>
      <Popup>
        <div>
          <p>You are going to here</p>
          <p>
            at{" "}
            <strong>
              {distance}
            </strong>{" "}
            km from where you are
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

export default DestinationMarker;
