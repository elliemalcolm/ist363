import { useState } from "react";
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return <h1 className="mt-4 text-center">Home Page</h1>;
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={() => setPage('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={() => setPage('about')}>About</button>
            </li>
          </ul>
      </nav>

      <div className="container mt-3">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
      </div>
    </>
  );
}

export default App;
