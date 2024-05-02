import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Register from "./routes/register";
import Login from "./routes/login";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path="/"
          element={<Root />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
};

export default App;
