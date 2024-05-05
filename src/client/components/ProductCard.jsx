import {useNavigate} from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate()

  function handleClick(){
    navigate(`/product/${item.id}`, {state: item})
  }

  return (
    <div
      className="w-1/3 p-4 transition duration-500 ease-in-out hover:shadow-2xl rounded-lg hover:cursor-pointer my-4"
      onClick={handleClick}
    >
      <img
        className="rounded-xl w-72 h-72"
        src={item.imgURL}
        alt={item.desc}
      />
      <div className="py-4">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <div className="flex flex-col">
          <h2 className="text-lg text-gray-600">{item.seller}</h2>
          <div className="flex justify-between items-center">
            <h2 className=" text-gray-500">{item.price} Birr</h2>
            <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 active:ring-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
