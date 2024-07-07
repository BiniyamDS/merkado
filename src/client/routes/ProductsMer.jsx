import MicroModal from "micromodal";
import { useEffect } from "react";
import AddModal from "../components/sub-components/AddModal";

const ProductsMer = () => {
  useEffect(() => {
    MicroModal.init();
  }, []);

  return (
    <div>
      ProductsMer
      <button
        data-micromodal-trigger="modal-1"
        className="px-2 bg-blue-400 mx-2 rounded-md text-white hover:bg-blue-600 text-sm"
      >
        Add Product
      </button>
      <AddModal/>
    </div>
  );
};

export default ProductsMer;
