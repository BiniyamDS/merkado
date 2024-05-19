import {useNavigate} from 'react-router-dom'
import Tags from './sub-components/Tags';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${item.id}`, { state: item });
  }


  return (
    <div
      className="w-1/3 p-4 transition duration-500 ease-in-out hover:shadow-2xl rounded-lg hover:cursor-pointer my-4 max-h-90 max-w-56 flex flex-col flex-shrink-1"
      onClick={handleClick}
    >
      <img className="rounded-xl max-w-full max-h-44" src={item.imgURL} alt={item.desc} />
      <div className="py-4">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-600">{item.seller}</h2>
          <div className="flex justify-between items-center">
            <h2 className=" text-gray-500">{item.price} Birr</h2>
            <button onClick={(e) => {
              e.stopPropagation()
              console.log('hello')}} className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-700 active:ring-2">
              Add to cart
            </button>
          </div>
            <Tags tags={item.tags}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
