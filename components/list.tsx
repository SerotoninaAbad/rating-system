import React from 'react';
import { ListItemProps } from './listItem';
import ListItem from './listItem';

interface ListProps {
  items: ListItemProps[];
}
export default function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <ListItem
            key={index}
            name={item.name}
            onClick={item.onClick}
            selected={item.selected}
          />
        );
      })}
    </ul>
  );
}
