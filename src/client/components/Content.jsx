import { useEffect } from "react";
import SellerTable from "../components/sub-components/SellerTable";
import EditModal from "./sub-components/EditModal";
import DeleteModal from "./sub-components/DeleteModal";
import MicroModal from "micromodal";

const Content = ({ item }) => {
  useEffect(() => {
    MicroModal.init();
  })
  return (
    <div>
      <div
        className="flex mx-auto p-4"
        //   style={{ maxWidth: "1000px" }}
      >
        <img
          // src={item.imgURL}
          src={item.imgURL}
          alt={item.desc}
          className="w-96 h-96 pr-2"
        />
        <div>
          <button
            data-micromodal-trigger="modal-1"
            className="bg-blue-500 active: text-white p-2 rounded-md"
          >
            Edit Product
          </button>
          <button
            data-micromodal-trigger="modal-2"
            className="mx-2 bg-red-500 active: text-white p-2 rounded-md"
          >
            Delete Product
          </button>
          <h1 className="text-4xl font-bold">{item.title}</h1>
          <p className="text-gray-500">Added on Mar, 2024</p>
          <p>{item.desc}</p>
          <div className="mt-4 p-4 border-2 border-red-400">
            <p className="border-b border-b-black">Seller details</p>
            <SellerTable name={item.seller} />
          </div>
        </div>
      </div>
      <div className="block">
        <h2>Related products</h2>
      </div>
      <EditModal item={item}/>
      <DeleteModal item={item}/>
    </div>
  );
};

export default Content;
