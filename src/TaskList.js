import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>Name:</strong> {task.name}
            <br />
            <strong>Roll No:</strong> {task.rollno}
            <br />
            <strong>Phone Number:</strong> {task.phonenumber}
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
