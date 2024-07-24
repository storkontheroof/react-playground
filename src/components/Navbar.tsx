import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2 p-4 bg-slate-300">
      <Link to="/">Home</Link>
      <Link to="/context">Context</Link>
    </nav>
  );
}

export default Navbar;