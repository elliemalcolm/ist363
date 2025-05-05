import React from 'react';

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="text-center my-4 text-primary">Welcome to the Book & Movie Portal</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        {/* First Card */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow">
            <img src="book1.jpg" alt="Book Cover" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Book Title 1</h5>
              <p className="card-text">Movie Title 1</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow">
            <img src="book2.jpg" alt="Book Cover" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Book Title 2</h5>
              <p className="card-text">Movie Title 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
