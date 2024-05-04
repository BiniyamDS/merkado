import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Register from "./routes/register";
import Login from "./routes/login";
import PrivateRoutes from "./components/PrivateRoutes";
import ForgotPassword from "./routes/forgotPassword";
import Home from "./routes/home";
import About from "./routes/about";
import Products from "./routes/products";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/"
            element={<Root />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
          </Route>
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
