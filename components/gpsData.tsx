// GpsData.tsx
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

type LatLngLiteral = google.maps.LatLngLiteral;
type GpsData = { name: string; lat: number; lng: number, date: string; time: string; battery: number};

export const useGpsData = () => {
//   const [gpsData, setGpsData] = useState<LatLngLiteral[]>([]);
    const [gpsData, setGpsData] = useState<GpsData[]>([]);


    useEffect(() => {
        fetch('/mock.csv')
          .then(response => response.text())
          .then(csvData => {
            Papa.parse(csvData, {
              header: true,
              skipEmptyLines: true,
              complete: (results) => {
                const parsedData = results.data.map((data: any) => ({
                  name: data.name,
                  lat: parseFloat(data.latitude),
                  lng: parseFloat(data.longitude),
                  date: data.date,
                  time: data.time,
                  battery: parseInt(data.battery, 10)
                }));
                setGpsData(parsedData);
                console.log(parsedData); // This is correctly placed for debugging
              }
            });
          });
      }, []);
      

  return gpsData;
};
