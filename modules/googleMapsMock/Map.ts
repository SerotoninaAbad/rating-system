interface Options {
  center: { lat: number; lng: number };
  zomm: number;
}

interface MouseEvent {
  latLng: LatLngFn;
}

export interface LatLngFn {
  lat: () => number;
  lng: () => number;
}

export class Map {
  constructor(mapContainer: HTMLDivElement, options: Options) {
    return;
  }

  addListener(event: string, fn: (e: MouseEvent) => void): void {
    const mouseEvent: MouseEvent = {
      latLng: {
        lat: () => -2.220879,
        lng: () => -78.664764,
      },
    };
    fn(mouseEvent);
  }

  panTo(param: LatLngFn): void {
    return;
  }
}
