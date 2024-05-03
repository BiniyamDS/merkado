import Card from "../components/Card";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();

  useEffect(() => {
    emailRef.current.focus();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError();
    if (!emailRef.current.value || !passwordRef.current.value) {
      setError("Enter an email and password");
      return;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(
          "submitted",
          emailRef.current.value,
          passwordRef.current.value
        );
        resolve()
      }, 2000);
    })
  }

  return (
    <Card>
      <h1 className="font-bold text-3xl pb-2 mx-auto">Sign in</h1>
      {error && <h1 className="error">{error}</h1>}
      <form className="py-2">
        <label
          className="text-lg"
          htmlFor="email"
        >
          Email
          <input
            className="input"
            type="text"
            ref={emailRef}
          />
        </label>
        <label
          className="text-lg"
          htmlFor="email"
        >
          Password
          <input
            className="input"
            type="password"
            ref={passwordRef}
          />
        </label>
        <LoadingButton
          handleAction={handleSubmit}
          type="submit"
        >
          Login
        </LoadingButton>
      </form>
      <p className="mx-auto text-lg">
        Don't have an account?{" "}
        <Link
          className="text-blue-800 hover:underline"
          to="/register"
        >
          Sign up
        </Link>
      </p>
    </Card>
  );
};

export default Login;
