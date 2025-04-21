import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

const initialPioneers = [
  {
    id: 1,
    name: "Elizabeth J. Feinler",
    image: "/images/elizabeth.png",
    viewed: false,
    bio: "Elizabeth Feinler led the ARPANET directory project, the precursor to DNS.",
    age: 80,
    knownFor: "Overseeing ARPANET which turned into the internet and inventing the concept of top-level domains like .com, .net, and .edu with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 2,
    name: "Tim Berners Lee",
    image: "/images/tim.png",
    viewed: false,
    bio: "Inventor of the World Wide Web.",
    age: 69,
    knownFor: "Inventor of the World Wide Web, the HTML markup language, the URL system, and HTTP with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 3,
    name: "Ray Tomlinson",
    image: "/images/tomlinson.png",
    viewed: false,
    bio: "Implemented the first email program on the ARPANET system.",
    age: 75,
    knownFor: "Inventor of email and the use of '@' in addresses with supporting text below as a natural lead-in to additional content.",
  }
];

function App() {
  const [pioneers, setPioneers] = useState(initialPioneers);
  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handleSelect = (id) => {
    const updatedPioneers = pioneers.map((pioneer) =>
      pioneer.id === id ? { ...pioneer, viewed: true } : pioneer
    );
    setPioneers(updatedPioneers);
    const chosen = updatedPioneers.find((p) => p.id === id);
    setSelectedPioneer(chosen);
  };

  const goBack = () => setSelectedPioneer(null);

  if (selectedPioneer) {
    return (
      <div className="container-fluid py-5" style={{ backgroundColor: '#5c636a', minHeight: '100vh' }}>
        <h1 className="text-center text-white mb-4">Internet Pioneers Bios</h1>
        <div className="card mx-auto bg-secondary text-white" style={{ maxWidth: "600px" }}>
          <div className="card-header bg-secondary text-white fw-bold text-center">
            {selectedPioneer.name}
          </div>
          <div className="bg-secondary text-center py-4">
            <img
              src={selectedPioneer.image}
              alt={selectedPioneer.name}
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="card-body bg-secondary">
            <p><strong>Age:</strong><br />{selectedPioneer.age}</p>
            <p><strong>Known For:</strong><br />{selectedPioneer.knownFor}</p>
          </div>
          <div className="bg-secondary text-center pb-4">
            <button className="btn btn-primary" onClick={goBack}>
              Return to Directory
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Internet Pioneers Bios</h1>
      <div className="row justify-content-center">
        {pioneers.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <div
              className="card position-relative"
              style={{ width: "100%", maxWidth: "18rem", cursor: "pointer" }}
              onClick={() => handleSelect(p.id)}
            >
              {p.viewed && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  VIEWED
                </span>
              )}
              <img
                src={p.image}
                className="card-img-top object-fit-cover"
                alt={p.name}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="card-body text-center px-3 py-4">
                <h5 className="card-title">{p.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
