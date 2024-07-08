import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
const Root = () => {
  const { currentUser, account_type } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function get_act() {
      const act1 = await account_type();
      console.log(act1);
      if (act1 === "Merchant") {
        navigate("/merchant");
      }
    }
    get_act();
  }, []);
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
