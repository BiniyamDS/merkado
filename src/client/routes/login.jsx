import Card from "../components/Card";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const { signIn, test } = useAuth();
  const navigate = useNavigate();

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
    
    try {
      console.log(test)
      await signIn(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch(err){
      console.log(err)
      setError('Failed to sign in')
    }
  }

  return (
    <Card>
      <h1 className="font-bold text-3xl pb-2 mx-auto">Sign in</h1>
      {error && <h1 className="error">{error}</h1>}
      <form className="py-2 flex flex-col">
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
          htmlFor="password"
        >
          Password
          <input
            className="input"
            type="password"
            ref={passwordRef}
          />
        </label>
        <Link
          className="links mx-auto"
          to="/forgot-password"
        >
          Forgot password?
        </Link>
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
          className="links"
          to="/register"
        >
          Sign up
        </Link>
      </p>
    </Card>
  );
};

export default Login;
