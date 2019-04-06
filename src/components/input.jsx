import React from "react";

const Input = props => (
  <input
    type="text"
    className={props.className}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
);
export default Input;
