import React, { useState } from "react";
import AddBtn from "./AddBtn";
import "./styles.css";
import ItemList from "./ItemList";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const addItem = () => {
    setItems([...items, `item-${count}`]);
    setCount(count + 1);
  };

  const removeItem = item => {
    const newItems = [...items];
    setItems(newItems.filter(it => it !== item));
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.index === source.index) return;
    const newItems = [...items];
    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, draggableId);
    setItems(newItems);
  };
  return (
    <div className="App">
      <h3>React Drag and Drop example.</h3>
      <main>
        <AddBtn addItem={addItem} />
        <DragDropContext onDragEnd={onDragEnd}>
          <ItemList items={items} removeItem={removeItem} />
        </DragDropContext>
      </main>
    </div>
  );
}
