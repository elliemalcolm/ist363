import React from 'react';

function Profile() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="text-center my-4 text-primary">Your Saved Entries</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        {/* Saved Entry Card */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Book Title A</h5>
              <p className="card-text">Movie Title A</p>
              <span className="badge bg-success">✔️ Viewed</span>
            </div>
          </div>
        </div>

        {/* Another Saved Entry Card */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Book Title B</h5>
              <p className="card-text">Movie Title B</p>
              <span className="badge bg-success">✔️ Viewed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
