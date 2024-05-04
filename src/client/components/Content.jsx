import SellerTable from '../components/sub-components/SellerTable'

const Content = ({ item }) => {
  return (
    <div
      className="flex mx-auto p-4"
    //   style={{ maxWidth: "1000px" }}
    >
      <img
        src={item.imgURL}
        alt={item.description}
        className="w-96 h-96 pr-2"
      />
      <div>
      <h1 className="text-4xl font-bold">{item.title}</h1>
      <p className="text-gray-500">Added on Mar, 2024</p>
      <p>{item.description}</p>
      <div className="mt-4 p-4 border-2 border-red-400">
        <p className="border-b border-b-black">Seller details</p>
        <SellerTable name={item.seller}/>
      </div>
      </div>
    </div>
  );
};

export default Content;
