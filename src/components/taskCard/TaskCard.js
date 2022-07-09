import React from "react";
import "./TaskCard.scss";

const TaskCard = (props) => {

  const deleteCard = () => {
    console.log("deleted");
    props.deleteTask(props.index);
  };

  return (
    <div onClick={deleteCard} className="TaskCard">
      <p>{props.title}</p>
    </div>
  );
};

export default TaskCard;
