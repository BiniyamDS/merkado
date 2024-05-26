import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";
import Register from "./routes/register";
import Login from "./routes/login";
import PrivateRoutes from "./components/PrivateRoutes";
import ForgotPassword from "./routes/forgotPassword";
import Home from "./routes/home";
import About from "./routes/about";
import Cart from "./routes/cart";
import { AuthProvider } from "./contexts/AuthContext";
import Product from './routes/product'
import CreateAccount from "./routes/createAccount";

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
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/product/:productId"
              element={<Product />}
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
        <Route
          path="/create-account"
          element={<CreateAccount />}
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
