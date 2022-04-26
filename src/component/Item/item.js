import React from "react";

function Item(props) {
  const [text, setText] = React.useState(props.text);
  const [edit, setEdit] = React.useState(true);
  const testDelete = React.useRef();
  let inputValue = "";
  function onClickDelete(e) {
    testDelete.current.remove();
  }
  function onClickEdit() {
    if (!edit && inputValue !== "") {
      setText(inputValue);
    }
    setEdit(!edit);
  }
  function onClickCancel() {
    setEdit(true);
  }
  function onChange(e) {
    inputValue = e.target.value;
  }
  return (
    <React.Fragment>
      {edit ? (
        <div ref={testDelete}>
          <div>{text}</div>
          <div>
            <button onClick={onClickEdit}>edit</button>
            <button onClick={onClickDelete}>delete</button>
          </div>
        </div>
      ) : (
        <div ref={testDelete}>
          <div>
            <input onChange={onChange} autoFocus />
          </div>
          <div>
            <button onClick={onClickEdit}>edit</button>
            <button onClick={onClickCancel}>cancel</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default Item;
