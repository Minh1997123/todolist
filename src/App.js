import React from "react";
import Item from "./component/Item/item";

function App() {
  const [value, setValue] = React.useState("");
  const [listItem, setListItem] = React.useState([]);

  function onClick(e) {
    setListItem((list) => [...list, value]);
    document.getElementById("text").value = "";
  }
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <div>To Do List</div>
      <div>
        <input type="text" onChange={onChange} id="text" />
        <button onClick={onClick}>Add</button>
      </div>
      <div>
        {listItem.map((e, i) => {
          return <Item text={e} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
