import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {RoadPlanContext} from '../../context/roadPlanContext';

function AerialMap({ setStartLocation, setEndLocation, height, width, startt, endd }) {
  const { start, updateStart, end, updateEnd } = useContext(RoadPlanContext);

  const handleMarker1DragEnd = (e) => {
    const { lat, lng } = e.target._latlng;
    updateStart({ lat, lng });
  };

  const handleMarker2DragEnd = (e) => {
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

      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
      />

      <Marker
        position={start}
        draggable={true}
        eventHandlers={{
          dragend: handleMarker1DragEnd,
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
          dragend: handleMarker2DragEnd,
        }}
        icon={markerIcon}
      >
        <Popup>
          Latitude: {end.lat}, Longitude: {end.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default AerialMap;
