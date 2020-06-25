import React, { useState } from "react";
import AddBtn from "./AddBtn";
import "./styles.css";
import ItemList from "./ItemList";

export default function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = () => {
    setItems([...items, `item-${count}`]);
    setCount(count + 1);
  };

  const removeItem = item => {
    const newItems = [...items];
    setItems(newItems.filter(it => it !== item));
  };
  return (
    <div className="App">
      <h3>React Drag and Drop example.</h3>
      <main>
        <AddBtn addItem={addItem} />
        <ItemList items={items} removeItem={removeItem} />
      </main>
    </div>
  );
}
