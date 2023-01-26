import React, { useState } from "react";

function App() {
  const [addItem, setAddItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const item = event.target.value;
    setAddItem(item);
  }
  function handleClick() {
    setItemList((prevValue) => {
      return [...prevValue, addItem];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((items) => (
            <li>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
