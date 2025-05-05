import React from 'react';

function FindMore() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center my-4 text-primary">Add a New Book & Movie Pair</h2>

          <form className="bg-white shadow p-4 rounded-3">
            {/* Book Title Field */}
            <div className="mb-3">
              <label className="form-label">Book Title:</label>
              <input type="text" className="form-control" />
            </div>

            {/* Movie Title Field */}
            <div className="mb-3">
              <label className="form-label">Movie Title:</label>
              <input type="text" className="form-control" />
            </div>

            {/* Image URL Field */}
            <div className="mb-3">
              <label className="form-label">Image URL:</label>
              <input type="text" className="form-control" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Save Entry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindMore;
