import React, { useState } from "react";
import "./App.scss";
import EmptyTask from "./components/emptyTask/EmptyTask";
import InputForm from "./components/inputForm/InputForm";
import TaskCard from "./components/taskCard/TaskCard";
import TaskList from "./components/tasksList/TaskList";
import Interface from "./components/ui/Interface";

const data = [
  // {
  //   id: 1221,
  //   title: "Create App",
  // },
  // {
  //   id: 1223,
  //   title: "Read Book",
  // },
];

function App() {
  const [init, setInit] = useState(data);

  const handleData = (newData) => {
    setInit(() => {
      return [newData, ...init];
    });
  };

  const handleDelete = (elToDelete) => {
    let x = init.filter((value, index) => {
      return index !== elToDelete;
    });
    setInit(x);
    console.log(init);
  };

  var content = init.map((data, index) => {
    return (
      <TaskCard
        title={data.title}
        index={index}
        key={index}
        deleteTask={handleDelete}
      ></TaskCard>
    );
  });

  if (init.length === 0) {
    content = <EmptyTask text="la liste est vide" />;
  }

  return (
    <Interface>
      <InputForm addTask={handleData}></InputForm>
      <TaskList>{content}</TaskList>
    </Interface>
  );
}

export default App;
