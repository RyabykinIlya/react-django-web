import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button
      className={"btn " + props.className}
      type="button"
      name={props.name}
    >
      {props.children}
    </button>
  );
}

export default Button;
