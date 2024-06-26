import { useNavigate } from "react-router-dom";
import Tags from "./sub-components/Tags";
import { useAuth } from "../contexts/AuthContext";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const { addToCart } = useAuth();

  function handleClick() {
    navigate(`/product/${item.id}`, { state: item });
  }

  return (
    <div
      className="w-1/3 p-4 transition duration-500 ease-in-out hover:shadow-2xl rounded-lg hover:cursor-pointer my-4 flex flex-col"
      onClick={handleClick}
      style={{ maxHeight: "400px", maxWidth: "500px" }}
    >
      <img
        className="rounded-t-xl h-56"
        src={item.imgURL}
        alt={item.desc}
      />
      <div className="py-4">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-600">{item.seller}</h2>
          <div className="flex justify-between items-center">
            <h2 className=" text-gray-500">{item.price} Birr</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("added to cart");
                addToCart(item.id)
              }}
              className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 active:ring-2"
            >
              Add to cart
            </button>
          </div>
          <Tags tags={item.tags} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
