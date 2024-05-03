import Card from "../components/Card";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState()

  useEffect(() => {
    emailRef.current.focus()
  })

  function handleSubmit(e){
    e.preventDefault();
    setError()
    if(!emailRef.current.value || !passwordRef.current.value){
      setError('Enter an email and password')
      return
    }
    console.log('submitted', emailRef.current.value, passwordRef.current.value)
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
        <button
          className="btn bg-red-500 w-full hover:bg-red-600"
          onClick={handleSubmit}
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="mx-auto text-lg">Don't have an account? <Link className='text-blue-800 hover:underline' to='/register'>Sign up</Link></p>
    </Card>
  );
};

export default Login;
