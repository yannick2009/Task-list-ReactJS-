import React, { useState } from "react";
import "./InputForm.scss";

const InputForm = (props) => {
  const [content, setContent] = useState("");

  const textCapture = (event) => {
    setContent(event.target.value);
  };

  const createData = (e) => {
    e.preventDefault();
    if (content !== "") {
      const data = {
        key: Math.random(),
        title: content,
      };
      setContent("");
      props.addTask(data);
      // console.log(data);
    }
  };

  return (
    <form onSubmit={createData}>
      <p>Ajouter une Tâche</p>
      <input
        value={content}
        onChange={textCapture}
        placeholder="Ecrire ici"
        type="text"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default InputForm;
