import ProductTable from "../components/ProductTable";
import { useAuth } from "../contexts/AuthContext";
import { useCallback, useEffect, useState } from "react";

const Cart = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col">
      <h1 className="text-center font-bold text-4xl">My Shopping Cart</h1>
      <div className="border-2 mt-4 rounded-sm shadow-lg">
        <ProductTable />
        <div className="flex border-2 p-4 float-right mx-4 my-4 w-44 justify-between">
          <p className="text-gray-500">Total</p>
          <p className="font-semibold">5000 Birr</p>
        </div>
      </div>
      <button className="mx-auto bg-blue-900 p-2 m-2 text-white font-bold hover:bg-blue-950">
        Check Out
      </button>
    </div>
  );
};

export default Cart;
