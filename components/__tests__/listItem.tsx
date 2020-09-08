import React from 'react';
import ListItem from '../listItem';
import { render, fireEvent } from '@testing-library/react';

const onClick = jest.fn();

describe('<ListItem>', () => {
  it('accepts name as prop and render', () => {
    const { getByText } = render(<ListItem name="Belén" onClick={onClick} />);
    const li = getByText(/Belén/);
    expect(li).toBeInTheDocument();
  });

  it('executes a function sent as prop on button click', () => {
    const { getByText } = render(
      <ListItem name="Belén" onClick={onClick} selected={false} />
    );
    const button = getByText(/seleccionar/);
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });

  it('render a check image if selected', () => {
    const { getByTestId } = render(
      <ListItem name="Belén" onClick={onClick} selected={true} />
    );

    const image = getByTestId(/check/);
    expect(image).toBeInTheDocument();
  });
});
