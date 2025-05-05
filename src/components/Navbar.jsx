import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Customers", path: "/customers" },
    { name: "Loans", path: "/loans" },
    { name : "Logout", path: "/login"},
  ];

  return (
    <nav className="bg-white shadow-sm px-4 py-3 w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <Link to="/"><h1 className="text-xl font-bold text-gray-800">CrediKhaata</h1></Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 ml-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium ${
                location.pathname === item.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700"
              } hover:text-blue-600 transition`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Search bar */}
        <div className="hidden md:block relative w-48">
          <FaSearch className="absolute top-2.5 left-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full pl-8 pr-4 py-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <>
        <div className="md:hidden mt-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left px-2 py-2 rounded-md ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold bg-blue-50"
                  : "text-gray-700"
              } hover:bg-blue-100`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="relative mt-2">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search ..."
              className="w-full pl-8 pr-4 py-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        </>
      )}
    </nav>
  );
}
