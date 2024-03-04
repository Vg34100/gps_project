// useUserLocation.tsx
import { useState, useEffect } from 'react';

type LatLngLiteral = google.maps.LatLngLiteral;

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<LatLngLiteral | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting the location: ", error);
          alert("Unable to retrieve your location");
        },
        {
          enableHighAccuracy: true,
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  return userLocation;
};
