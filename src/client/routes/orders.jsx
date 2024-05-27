import OrderTable from "../components/OrderTable";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

const Orders = () => {
  const { getOrders, checkOut, emptyCart } = useAuth();

  const [cartList, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchCart() {
    setLoading(true);
    const cart_db = await getOrders();
    setCart(cart_db);

    setLoading(false);
  }
  useEffect(() => {
    fetchCart();
  }, []);

  async function handleCheckOut() {
    try {
      await checkOut(cartList)
      emptyCart()
      fetchCart()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="mx-auto mt-4 flex flex-col mb-4">
      <h1 className="text-center font-bold text-4xl">My Orders</h1>
      <div className="border-2 mt-4 rounded-sm shadow-lg">
        {loading ? (
          <p className="p-8 text-2xl text-center">Loading data...</p>
        ) : (
          <>
            <OrderTable cartList={cartList} fetch={fetchCart}/>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
