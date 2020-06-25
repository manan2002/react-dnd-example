import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

const ItemList = ({ items, removeItem }) => {
  return (
    <Droppable droppableId="itemlist">
      {provided => (
        <div
          className="ItemList"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {items.map((item, i) => {
            return (
              <Item item={item} key={item} index={i} removeItem={removeItem} />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ItemList;
