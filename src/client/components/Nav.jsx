import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import ProfileButton from "./sub-components/ProfileButton.jsx";
import Hint from "./sub-components/Hint.jsx";

function NavLinks() {
  return (
    <>
      <Hint text="Cart">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-900 hover:text-red-400"
          }
        >
          <ShoppingCart className="h-8 w-8" />
        </NavLink>
      </Hint>
      <ProfileButton />
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
      <nav
        className="w-20"
        style={{ maxWidth: "300px" }}
      >
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

function NavItem() {}
