import { useState } from "react";

const students = [
  { suid: 123456, name: "Sue Flay", year: "senior", major: "Applied Data Analytics" },
  { suid: 234567, name: "Ella Vader", year: "junior", major: "Information Management and Technology" },
  { suid: 345678, name: "Chris P Bacon", year: "junior", major: "Innovation, Society and Technology" }
];

function App() {
  // Student Search 
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearchChange = (event) => {
    setFilteredStudents(
      students.filter((student) =>
        student.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  // To-Do List 
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete Lab 11", completed: false },
    { id: 2, task: "Review JSX Events and State", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      completed: false
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask(""); 
  };

  return (
    <div>
      {/* Student Search */}
      <h1>Student Search</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleSearchChange} />
      <ul>
        {filteredStudents.map((item) => (
          <li key={item.suid}>
            <strong>Name:</strong> {item.name}
            <br />
            <strong>Year:</strong> {item.year}
            <br />
            <strong>Major:</strong> {item.major}
          </li>
        ))}
      </ul>

      {/* To-Do List */}
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
