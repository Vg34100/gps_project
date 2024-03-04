// GpsList.tsx
import React from 'react';

type LatLngLiteral = google.maps.LatLngLiteral;
type GpsData = { name: string; lat: number; lng: number, date: string; time: string; battery: number};

interface GpsListProps {
  gpsData: GpsData[];
  focusOnLocation: (location: LatLngLiteral) => void; // Function to focus map on location
}

const GpsList: React.FC<GpsListProps> = ({ gpsData, focusOnLocation }) => {
  return (
    <div className="gps-list">
      <h2>Available GPS</h2>
      <ul>
        {gpsData.map((gps, index) => (
          <li key={index} onClick={() => focusOnLocation({ lat: gps.lat, lng: gps.lng })}>
            {gps.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GpsList;
