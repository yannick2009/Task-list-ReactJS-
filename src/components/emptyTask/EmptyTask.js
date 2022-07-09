import React from "react";
import "./EmptyTask.scss";

const EmptyTask = (props) => {
  return (
    <div className="EmptyTask">
      <p>{props.text}</p>
    </div>
  );
};

export default EmptyTask;
