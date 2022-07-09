import React from "react";
import "./Interface.scss";

const Interface = (props) => {
  return <div className="interface">{
      props.children
  }</div>;
};

export default Interface;
