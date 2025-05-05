import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Book & Movie Portal</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/find">Find More</Link>
      </div>
    </nav>
  );
}

export default Navbar;
