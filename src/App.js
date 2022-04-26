import React from "react";
import Item from "./component/Item/item";

function App() {
  const [value, setValue] = React.useState("");
  const [listItem, setListItem] = React.useState([]);

  function addItem(event) {
    if (value) {
      setListItem((list) => [...list, value]);
      setValue("");
    } else {
      console.log(listItem);
    }
  }
  const handleDelete = (value) => {
    const newList = listItem.filter((item) => item !== value);
    setListItem(newList);
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
        {listItem.map((e) => {
          return <Item content={e} key={e} onDelete={() => handleDelete(e)} />;
        })}
      </div>
    </div>
  );
}

export default App;
