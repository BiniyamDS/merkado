const Product = ({ item }) => {
  return (
    <div className="w-1/3 p-4 hover:shadow-lg rounded-lg hover:cursor-pointer my-4">
      <img
        className="rounded-t-xl w-72 h-72"
        src={item.imgURL}
        alt={item.desc}
      />
      <div className="py-4">
        <h1 className="text-xl font-bold">{item.title}</h1>
        <div className="flex py-2">
          <div className="flex pt-2">
            <h2>{item.seller}</h2>
            <h2 className="px-2 text-gray-500">{item.price} Birr</h2>
          </div>
          <button className="bg-red-500 p-2 mx-2 rounded-lg text-white hover:bg-red-700 active:ring-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
