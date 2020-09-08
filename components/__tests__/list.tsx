import React from 'react';
import List from '../list';
import { render } from '@testing-library/react';

const items = [
  { name: 'Jorge', selected: false },
  { name: 'Pancho', selected: false },
];
describe('<List>', () => {
  it('renders items', () => {
    const { getByText } = render(<List items={items} />);
    getByText(/Jorge/);
    getByText(/Pancho/);
  });
});
