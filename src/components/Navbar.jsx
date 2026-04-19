import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side logo/title */}
      <div className="navbar-logo">
        <h1>Re-Mmogo</h1>
        <span>Motshelo Management System</span>
      </div>

      {/* Right side links */}
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Groups</a></li>
        <li><a href="#">Loans</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;