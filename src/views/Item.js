import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const Item = () => {
  const { items } = useContext(ShopContext);
  //Destructuring from pair value-Setter function [itemData, setItemData]
  const [itemData] = items;

  const { id } = useParams();
  //Assign Object of array to show in current "item page"
  let item = itemData[id];

  return (
    <div className="item-page-card">
      <p>Hello from Item</p>
      <p>{item.class}</p>
    </div>
  );
};
