import ProductTable from "../components/ProductTable";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";

const Cart = () => {
  const { getCart, checkOut, emptyCart } = useAuth();

  const [cartList, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchCart() {
    setLoading(true);
    const cart_db = await getCart();
    setCart(cart_db);

    setLoading(false);
  }
  useEffect(() => {
    fetchCart();
  }, [getCart]);

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
    <div className="mx-auto mt-4 flex flex-col">
      <h1 className="text-center font-bold text-4xl">My Shopping Cart</h1>
      <div className="border-2 mt-4 rounded-sm shadow-lg">
        {loading ? (
          <p className="p-8 text-2xl text-center">Loading data...</p>
        ) : (
          <>
            <ProductTable cartList={cartList} fetch={fetchCart}/>
            
          </>
        )}
      </div>
      <button
        onClick={handleCheckOut}
        disabled={loading}
        className="mx-auto bg-blue-900 p-2 m-2 text-white font-bold hover:bg-blue-950"
      >
        Check Out
      </button>
    </div>
  );
};

export default Cart;
