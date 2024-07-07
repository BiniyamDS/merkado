import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="side-pan text-white w-1/4 bg-black">
        <nav className="flex flex-col">
          <Link to='/merchant'>Overview</Link>
          <Link to='/merchant/products'>Products</Link>
          <Link to='/merchant/orders'>Orders</Link>
          <Link to='/merchant/settings'>Settings</Link>
        </nav>
      </div>
      <div className="content w-full bg-slate-200 border-4">
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
