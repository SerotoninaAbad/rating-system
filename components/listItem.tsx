import React, { useState } from 'react';

export interface ListItemProps {
  name: string;
  onClick: (nombre: string) => void;
  selected?: boolean;
}
export default function ListItem({
  name,
  onClick,
  selected = false,
}: ListItemProps) {
  return (
    <li>
      {name}
      {selected && (
        <svg
          data-testid="check"
          height="20pt"
          viewBox="0 0 20 20"
          width="20pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m452 512h-392c-33.085938 0-60-26.914062-60-60v-392c0-33.085938 26.914062-60 60-60h392c33.085938 0 60 26.914062 60 60v392c0 33.085938-26.914062 60-60 60zm-392-472c-11.027344 0-20 8.972656-20 20v392c0 11.027344 8.972656 20 20 20h392c11.027344 0 20-8.972656 20-20v-392c0-11.027344-8.972656-20-20-20zm370.898438 111.34375-29.800782-26.6875-184.964844 206.566406-107.351562-102.046875-27.558594 28.988281 137.21875 130.445313zm0 0" />
        </svg>
      )}
      {!selected && (
        <button
          onClick={() => {
            onClick(name);
          }}
        >
          seleccionar
        </button>
      )}
    </li>
  );
}
