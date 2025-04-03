//brings in react useState code
import { useState } from "react";

// sets up useState, what variable, what function changes it, and what start value
const Home = () => {

  const [name, setName] = useState('Laurie');


//function actually making dynamic change
let handleClick = () => {
  setName('Libby');
}
 
    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
}
  
  export default Home;
  