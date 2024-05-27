import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

function ProductTable({ cartList, fetch }) {
  const { removeFromCart } = useAuth();
  const sumRef = useRef()
  sumRef.current = 0


  // useEffect(() => {
  //   cartList.map()
  // })

  async function handleRemove(productId) {
    try {
      await removeFromCart(productId);
      fetch()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className="p-4 mx-auto"
      style={{ maxWidth: "1000px" }}
    >
      <table className="w-full">
        <thead className="border-b-2">
          <tr>
            <th className="px-3 py-2 text-lg">Description</th>
            <th className="px-3 py-2 text-lg">Price</th>
            <th className="px-3 py-2 text-lg">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartList &&
            cartList.map((item) => (
              
              <tr
                key={item.id}
                className=""
              >
                <td
                  className="flex px-3 py-4 border-b-2"
                  style={{ width: "500px" }}
                >
                  <img
                    className="w-32 h-32 rounded-md mx-2"
                    src={item.imgURL}
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className="font-bold text-2xl">{item.title}</h1>
                    <p className="text-lg text-gray-500">{item.seller}</p>
                  </div>
                </td>
                <td className="px-3 py-2 border-b-2 text-gray-400">
                  <p>{item.price} Birr</p>
                  <p className="hidden">{sumRef.current += Number(item.price)}</p>
                </td>
                <td className="px-3 py-2 border-b-2 text-gray-400">
                  <X
                    onClick={() => handleRemove(item.id)}
                    className="hover:cursor-pointer hover:text-black mx-auto"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex border-2 p-4 float-right mx-4 my-4 w-44 justify-between">
        <p className="text-gray-500">Total</p>
        <p className="font-semibold">{sumRef.current} Birr</p>
      </div>
    </div>
  );
}

export default ProductTable;
