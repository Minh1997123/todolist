import axios from "axios";
import React, { useState } from "react";
// import ConfirmDelete from "../confirmDelete/confirmDelete";
function Item(props) {
  const [content, setContent] = useState(props.item);
  const [inputValue, setInputValue] = useState(content);
  const [isEditingMode, setEditingMode] = useState(true);

  return (
    <React.Fragment>
      {isEditingMode ? (
        <div>
          <div>
            <input
              type="checkbox"
              defaultChecked={props.checked}
              onClick={props.onChange}
            />
            {content}
          </div>
          <div>
            <button
              onClick={(event) => {
                setEditingMode(false);
                setInputValue(content);
              }}
            >
              edit
            </button>
            <button
              onClick={() =>
                window.confirm("confirm delete")
                  ? props.onDelete()
                  : console.log("llll")
              }
            >
              delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <input
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                props.onChange(event);
              }}
            />
          </div>
          <div>
            <button
              onClick={(event) => {
                inputValue ? setContent(inputValue) : console.log("lll");
                axios
                  .put(props.url + "/" + props.index)
                  .then((res) => console.log(res));
                setEditingMode(true);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditingMode(false);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Item;
