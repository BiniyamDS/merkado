import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="flex bg-slate-200 text-xl h-16">
        <img  className='' src="/logo.png" alt="" />
        <Link
          to="/"
          className="p-4 hover:bg-white "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="p-4 hover:bg-white "
        >
          About us
        </Link>
        <Link
          to="/products"
          className="p-4 hover:bg-white "
        >
          Products
        </Link>
        <div className="p-2 hover:cursor-pointer">
          <img
            className="w-10 h-10 rounded-full"
            src="/product.png"
            alt=""
          />
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
