import { LatLng } from '../components/map';

let map: google.maps.Map;
let marker: google.maps.Marker;

const initMap = function initMap(
  mapContainer: HTMLDivElement,
  setCoordinates: (arg0: LatLng) => void
): void {
  map = new google.maps.Map(mapContainer, {
    center: { lat: -2.220879, lng: -78.664764 },
    zoom: 8,
  });

  marker = new google.maps.Marker({
    position: { lat: -2.220879, lng: -78.664764 },
    map: map,
  });

  map.addListener('click', (e) => {
    map.panTo(e.latLng);
    marker.setPosition(e.latLng);
    setCoordinates({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  });
};

export function loadCoordinates(latLng: LatLng): void {
  if (map && marker) {
    map.panTo(latLng);
    marker.setPosition(latLng);
  } else {
    console.warn('el mapa debe ser cargado primero, corror initmap');
  }
}

export default initMap;
