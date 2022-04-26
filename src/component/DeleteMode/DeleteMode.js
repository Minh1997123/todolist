import React from "react";

function DeleteMode(props) {
  return (
    <React.Fragment>
      <div>
        <div>Confirm Delete</div>
        <div>
          <button onClick={props.clickYes}>yes</button>
          <button onClick={props.clickNo}>no</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DeleteMode;
