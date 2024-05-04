import Nav from "./Nav";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="sticky flex-wrap top-0 mx-auto flex w-full items-center justify-between p-4 bg-white opacity-85">
      <Link to="/">
        <img
          className="h-16"
          src="/logo.png"
          alt="logo"
        />
      </Link>
      <Nav />
    </header>
  );
};

export default NavBar;
