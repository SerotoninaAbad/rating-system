import React, { useEffect, useRef, useState } from 'react';
import initMap, { loadCoordinates } from '../modules/initMap';
import loadScript from '../modules/loadScript';

export interface LatLng {
  lat: number;
  lng: number;
}

interface Props {
  latLng: LatLng;
  setLatLng: (arg0: LatLng) => any;
}

export default function Map({ latLng, setLatLng }: Props) {
  const googleMapContainerRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDcKY_hu2-4Ct4muHl0AsW04VFynjngop4'
    )
      .then(() => {
        initMap(googleMapContainerRef.current, setLatLng);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    loadCoordinates(latLng);
  }, [latLng]);

  return (
    <>
      <div
        className="container h-64 w-full"
        data-testid="mapa"
        ref={googleMapContainerRef}
      >
        {error ? 'Error al cargar el mapa' : ''}
      </div>
    </>
  );
}
