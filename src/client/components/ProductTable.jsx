import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function ProductTable() {
  const { getCart } = useAuth();

  const [cartList, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      const cart_db = await getCart()
      setCart(cart_db);
      
      setLoading(false);
    }
    fetchCart();
  }, [getCart]);

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
          {cartList && cartList.map((item) => (
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
              </td>
              <td className="px-3 py-2 border-b-2 text-gray-400">
                <X className="hover:cursor-pointer hover:text-black mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;


async function getNums(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3])
    }, 2000);
  })
}
// {
//   console.log('heloo', item)
//   return (

//   <tr
//     key={item.id}
//     className=""
//   >
//     <td
//       className="flex px-3 py-4 border-b-2"
//       style={{ width: "500px" }}
//     >
//       <img
//         className="w-32 h-32 rounded-md mx-2"
//         src={item.imgURL}
//         alt=""
//       />
//       <div className="p-4">
//         <h1 className="font-bold text-2xl">{item.title}</h1>
//         <p className="text-lg text-gray-500">{item.seller}</p>
//       </div>
//     </td>
//     <td className="px-3 py-2 border-b-2 text-gray-400">
//       <p>{item.price} Birr</p>
//     </td>
//     <td className="px-3 py-2 border-b-2 text-gray-400">
//       <X className="hover:cursor-pointer hover:text-black mx-auto" />
//     </td>
//   </tr>
// )}
