import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-700 hover:text-blue-600">
        MyApp
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/documentation" className="text-gray-600 hover:text-blue-500">
            Docs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
