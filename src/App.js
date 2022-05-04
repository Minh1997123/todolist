import axios from "axios";
import React, { useEffect } from "react";
import Item from "./component/Item/item";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

function App() {
  const [value, setValue] = React.useState("");
  const [listItems, setListItems] = React.useState([]);
  const url = "http://localhost:3000/todo";
  useEffect(() => {
    axios.get(url).then((data) => setListItems((list) => data.data));
  }, []);

  function addItem(event) {
    if (value) {
      axios.post(url).then((data) => console.log(data));
      setListItems((list) => [...list, { content: value, done: false }]);
      setValue("");
    } else {
      axios.delete(url + "/" + 1).then((res) => console.log(res));
    }
  }
  const handleDelete = (value) => {
    axios
      .delete(url + "/" + value)
      .then((res) => console.log(res, "-------------"));
    const newList = listItems.filter((item, index) => index !== value);
    setListItems(newList);
  };
  const handlChange = (index, event) => {
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
        <Button
          disabled={false}
          variant="outlined"
          disableElevation
          onClick={addItem}
        >
          Add
        </Button>
      </div>
      <div>
        {listItems.map((item, index) => {
          return (
            <Item
              item={item.content}
              key={item.content + index}
              onDelete={() => handleDelete(index)}
              onChange={(event) => handlChange(index, event)}
              checked={item.done}
              url={url}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
