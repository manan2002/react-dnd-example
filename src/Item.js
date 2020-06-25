import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ item, removeItem, index }) => {
  return (
    <Draggable draggableId={item} index={index}>
      {(provided, snapshot) => (
        <div
          className="item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item}
          <span
            className="remove"
            onClick={() => {
              removeItem(item);
            }}
          >
            +
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
