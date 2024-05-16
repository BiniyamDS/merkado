import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavLinks() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-gray-900 hover:text-red-400"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-gray-900 hover:text-red-400"
        }
      >
        About us
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-gray-900 hover:text-red-400"
        }
      >
        Products
      </NavLink>
    </>
  );
}

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <nav className="w-1/3 flex justify-end" style={{ maxWidth: "300px" }}>
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
