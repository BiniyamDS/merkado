import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
const Root = () => {
  const { currentUser, account_type } = useAuth();
  const [act, setAct] = useState();

  useEffect(() => {
    async function get_act() {
      setAct(await account_type())
    }
    get_act();
  }, []);
  return (
    <div className="flex flex-col">
      <NavBar />
      <p>{act}</p>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
