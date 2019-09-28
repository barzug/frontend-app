import React from 'react';

import './index.css'

function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
}

export default Input;
