import products from "../../server/data.js";
import Product from "../components/Product.jsx";

const Home = () => {
  return (
    <div className="mx-auto flex flex-wrap" style={{maxWidth: '1000px'}}>
      {products.map((product) => (
        <Product item={product} />
      ))}
    </div>
  );
};

export default Home;
