// import products from "../../server/data.js";
import Product from "../components/Product.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import axios from "axios";
import LoadingButton from "../components/LoadingButton.jsx";

const Home = () => {
  const [products, setProducts] = useState();
  const {currentUser, logout} = useAuth()

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div
      className="mx-auto flex flex-wrap"
      style={{ maxWidth: "1000px" }}
    >
      {/* <h1>{JSON.stringify(currentUser)}</h1> */}
      <LoadingButton handleAction={() => logout()}>Log out</LoadingButton>
      {products && products.map((product) => (
        <Product item={product} />
      ))}
    </div>
  );
};

export default Home;
