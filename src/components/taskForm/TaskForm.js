import "./taskform.css";
import { useState } from "react";

function TaskForm(props) {
  const addTask = "Add a Task";

  function renderHello() {
    return (
      <div>
        <h1>
          {" "}
          <p className="h1">Hello</p>
        </h1>
      </div>
    );
  }
  const [title, setTitle] = useState(" ");
  /*    props.sayHello();*/
  function handletitleChange(event) {
    setTitle(event.target.value);
  }

  function handleClick() {
    props.addTask(title);
  }

  return (
    <form action="" className="form">
      <input
        type="text"
        name="task"
        id=""
        value={title}
        onChange={handletitleChange}
      />
      <button type="button" onClick={handleClick}>
        {addTask}
      </button>
      {renderHello()}
    </form>
  );
}

export default TaskForm;
