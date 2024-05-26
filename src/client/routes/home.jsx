// import products from "../../server/data.js";
import ProductCard from "../components/ProductCard.jsx";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

const Home = () => {
  // const [products, setProducts] = useState();
  const { products } = useAuth();

  useEffect(() => {
    // async function fetchProducts() {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // }
    // fetchProducts();
  }, []);

  return (
    <div
      className="mx-auto flex flex-wrap w-full"
      style={{ maxWidth: "1000px" }}
    >
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            item={product}
          />
        ))}
    </div>
  );
};

export default Home;
