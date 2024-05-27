function OrderTable({ cartList, fetch }) {

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
            <th className="px-3 py-2 text-lg">Status</th>
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
                </td>
                <td className="px-3 py-2 border-b-2 text-gray-400">
                  <p>Shipped</p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
