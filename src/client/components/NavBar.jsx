import Nav from "./Nav";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header
      className="mx-auto flex w-full items-center justify-between px-4 opacity-85 max-h-12"
      // style={{maxHeight: '100px', overflow: "hidden"}}
    >
      <Link to="/">
        <img className="max-h-12" src="/logo.png" alt="logo" />
      </Link>
      <Nav />
    </header>
  );
};

export default NavBar;
