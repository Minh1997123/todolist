import React, { useState } from "react";
import DeleteMode from "../DeleteMode/DeleteMode";
function Item(props) {
  const [content, setContent] = useState(props.content);
  const [inputValue, setInputValue] = useState(content);
  const [isEditingMode, setEditingMode] = useState(true);
  const [isDeleteMode, setDeleteMode] = useState(true);

  return (
    <React.Fragment>
      {isEditingMode ? (
        <div>
          {isDeleteMode ? (
            <React.Fragment>
              <div>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  onClick={(event) => {
                    console.log(event.target.checked);
                  }}
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
                <button onClick={() => setDeleteMode(false)}>delete</button>
              </div>
            </React.Fragment>
          ) : (
            <DeleteMode
              clickYes={props.onDelete}
              clickNo={() => setDeleteMode(true)}
            />
          )}
        </div>
      ) : (
        <div>
          <div>
            <input
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
              autoFocus
            />
          </div>
          <div>
            <button
              onClick={() => {
                inputValue ? setContent(inputValue) : console.log("lll");
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
