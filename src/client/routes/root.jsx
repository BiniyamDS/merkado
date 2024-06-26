import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
