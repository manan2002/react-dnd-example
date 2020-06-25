import React from "react";
import Item from "./Item";

const ItemList = ({ items, removeItem }) => {
  return items.map(item => (
    <Item item={item} key={item} removeItem={removeItem} />
  ));
};

export default ItemList;
