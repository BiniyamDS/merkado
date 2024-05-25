import Nav from "./Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <header
      className="pt-2 mx-auto flex w-full items-center justify-between px-4 opacity-85 max-h-12"
      // style={{maxHeight: '100px', overflow: "hidden"}}
    >
      <Link to="/">
        <img
          className="max-h-12"
          src="/logo.png"
          alt="logo"
        />
      </Link>
      <div className="border-2 p-2 rounded-full">
        <input
          className="focus:none focus:outline-none"
          type="text"
          placeholder="Search for a product..."
        />
        <span className="search-icon pr-2 hover:cursor-pointer active:shadow-xl">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <Nav />
    </header>
  );
};

export default NavBar;
