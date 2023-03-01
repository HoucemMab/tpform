import TaskForm from "../../components/taskForm/TaskForm";
import Task from "../../components/task/Task";
import TaskList from "../../components/taskList/taskList";
import { useState } from "react";

function TaskPage() {
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Learn HTML",
      duration: "60",
    },
    {
      _id: "2",
      title: "Learn Angular",
      duration: "120",
    },
    {
      _id: "3",
      title: "Learn React",
      duration: "180",
    },

    {
      _id: "4",
      title: "Learn Node Js",
      duration: "240",
    },
  ]);
  function sayHello() {
    alert("hello");
  }
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  console.log("rendering");
  const steps = ["Enter a title", "click on button"];
  function addTask(title) {
    const newTask = { _id: tasks.length + 1, title, duration: 60 };
    console.log(newTask);
    const result = [...tasks, newTask];
    setTasks(result);
  }
  const loading = false;
  return (
    //fragment
    <>
      <ol>
        {steps.map(function (elem, index) {
          return <li key={index}>{elem}</li>;
        })}
      </ol>
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      <TaskForm sayHello={sayHello} addTask={addTask} />
      {/*            {loading ? <h4>Loading...</h4> :
                (
                    <>

            <Task/>
            <Task/>
            <Task/>
                    </>
                )}*/}
      {loading && <div>Loading</div>}
      {!isVisible && (
        <>
          <TaskList tasks={tasks} />
          {/*    <Task title="Learn HTML" duration={60} details={{level:"1"}} />
                    <Task title="Learn Angular" duration={120} details={{level:"2"}}/>
                    <Task title="Learn React" duration={180} />*/}
        </>
      )}
    </>
  );
}

export default TaskPage;
