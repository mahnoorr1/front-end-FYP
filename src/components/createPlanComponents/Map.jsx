import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {RoadPlanContext} from '../../context/roadPlanContext';

function Map({setStartLocation, setEndLocation, height, width}) {
  const { start, updateStart, end, updateEnd } = useContext(RoadPlanContext);
  // const [start, setStart] = useState({ lat: 33.6844, lng: 73.0479 });
  // const [end, setEnd] = useState({ lat: 33.5651, lng: 73.0169 });

  const HandleMarker1DragEnd = (e) => {
    const { lat, lng } = e.target._latlng;
    updateStart({ lat, lng });
  };

  const HandleMarker2DragEnd = (e) => {
    const { lat, lng } = e.target._latlng;
    updateEnd({ lat, lng });
  };

  const markerIcon = divIcon({
    className: 'custom-marker-icon',
    html: '<span style="background-color: transparent; color: green; font-size: 24px;">&#x25CF;</span>',
    iconSize: [34, 34],
    iconAnchor: [12, 24],
  });

  return (
    <MapContainer
      center={start}
      zoom={10}
      style={{ height: height, width: width, borderRadius: 20, marginLeft: 15 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        position={start}
        draggable={true}
        eventHandlers={{
          dragend: HandleMarker1DragEnd,
        }}
        icon={markerIcon}
      >
        <Popup>
          Latitude: {start.lat}, Longitude: {start.lng}
        </Popup>
      </Marker>

      <Marker
        position={end}
        draggable={true}
        eventHandlers={{
          dragend: HandleMarker2DragEnd,
        }}
        icon={markerIcon}
      >
        <Popup>
          Latitude: {end.lat}, Longitude: {end.lng}
        </Popup>
      </Marker>
      <div></div>
    </MapContainer>
  );
}

export default Map;
