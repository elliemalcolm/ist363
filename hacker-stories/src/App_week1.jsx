import { useState } from 'react';
import React from 'react';
import './App.css';

const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

const filteredStudents = students.filter(student => student.name === 'Sue Flay');

console.log(filteredStudents);

function Students() {
  return (
    <div>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.suid}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Year:</strong> {student.year} <br />
            <strong>Major:</strong> {student.major} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const logMessage = (message) => {
    console.log(message);
  };

  return (
    <div>
      <h1>Two Components</h1>
      <Students />

      <h1>Interactive Data Search</h1>
      <button onClick={() => logMessage('Hello World!')}>
        Click Me
      </button>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
