import Card from "../components/Card";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  function handleSubmit(e){
    e.preventDefault();
    console.log('submitted', usernameRef.current.value, passwordRef.current.value)
  }

  return (
    <Card>
      <h1 className="font-bold text-3xl px-2 mx-auto">Sign in</h1>
      <form className="p-2">
        <label
          className="text-lg"
          htmlFor="username"
        >
          Username
          <input
            className="input"
            type="text"
            ref={usernameRef}
          />
        </label>
        <label
          className="text-lg"
          htmlFor="username"
        >
          Password
          <input
            className="input"
            type="text"
            ref={passwordRef}
          />
        </label>
        <button
          className="btn bg-red-500 w-full hover:bg-red-600"
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="mx-auto">Don't have an account? <Link className='text-blue-800 hover:underline' to='/register'>Sign up</Link></p>
    </Card>
  );
};

export default Login;
