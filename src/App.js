import React from "react";
import Item from "./component/Item/item";

function App() {
  const [value, setValue] = React.useState("");
  const [listItems, setListItems] = React.useState([]);

  function addItem(event) {
    if (value) {
      setListItems((list) => [...list, { content: value, done: false }]);
      setValue("");
    } else {
      console.log(listItems);
    }
  }
  const handleDelete = (value) => {
    const newList = listItems.filter((item, index) => index !== value);
    setListItems(newList);
  };
  const handlChange = (index, event) => {
    console.log(event.target.type);
    console.log(listItems[index]);
    if (event.target.type === "checkbox") {
      listItems[index].done = event.target.checked;
    } else {
      listItems[index].content = event.target.value;
    }
  };
  return (
    <div>
      <div>To Do List</div>
      <div>
        <input
          value={value}
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          autoFocus
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        {listItems.map((item, index) => {
          return (
            <Item
              item={item.content}
              key={item.content}
              onDelete={() => handleDelete(index)}
              onChange={(event) => handlChange(index, event)}
              checked={item.done}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
