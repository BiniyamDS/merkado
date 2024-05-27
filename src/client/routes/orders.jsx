import OrderTable from "../components/OrderTable";

const Orders = () => {
  return (
    <div className="mx-auto mt-4 flex flex-col">
      <h1 className="text-center font-bold text-4xl">My Orders</h1>
      <div className="border-2 mt-4 rounded-sm shadow-lg">
        <OrderTable />
      </div>
    </div>
  );
};
export default Orders;
