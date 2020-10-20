import Map, { LatLng } from '../map';
import loadScript from '../../modules/loadScript';
import { render, waitFor } from '@testing-library/react';
import initMap from '../../modules/initMap';

jest.mock('../../modules/loadScript', () => ({
  __esModule: true,
  default: jest.fn((string) => {
    return Promise.resolve();
  }),
}));

const mockedLoadScript = loadScript as jest.Mock;

jest.mock('../../modules/initMap', () => ({
  __esModule: true,
  default: jest.fn(),
  loadCoordinates: jest.fn((latLng: LatLng) => {
    return;
  }),
}));

const latLng: LatLng = {
  lat: -2.220879,
  lng: -78.664764,
};
const setLatLng = jest.fn();

describe('<Map />', () => {
  it('renders a div container', async () => {
    render(<Map latLng={latLng} setLatLng={setLatLng} />);
    expect(loadScript).toBeCalledTimes(1);
    waitFor(() => {
      expect(initMap).toBeCalledTimes(1);
    });
  });

  it('shows a text if there was an error loading google maps', async () => {
    mockedLoadScript.mockImplementationOnce(() => Promise.reject());

    const { getByText } = render(<Map latLng={latLng} setLatLng={setLatLng} />);
    await waitFor(() => {
      expect(getByText(/Error al cargar el mapa/)).toBeInTheDocument();
    });
  });
});
