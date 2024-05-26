import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {useAuth} from '../contexts/AuthContext.jsx'
import ProfileButton from "./sub-components/ProfileButton.jsx";

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
        to="/cart"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "text-gray-900 hover:text-red-400"
        }
      >
        Cart
      </NavLink>
      {/* <div
        className='flex border-2 h-8 w-8 bg-blue-600 text-white rounded-full'
      >
        <p className="m-auto">{currentUser.displayName[0]}</p>
      </div> */}
      <ProfileButton/>
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
