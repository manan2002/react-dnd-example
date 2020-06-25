import React from "react";

const Item = ({ item, removeItem }) => {
  return (
    <div className="item">
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
  );
};

export default Item;
