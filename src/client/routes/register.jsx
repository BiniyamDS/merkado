import Card from "../components/Card"
import { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  function handleSubmit(e){
    e.preventDefault();
    console.log('submitted', emailRef.current.value, passwordRef.current.value)
  }

  return (
    <Card>
      <h1 className="font-bold text-3xl px-2 mx-auto">Sign up</h1>
      <form className="p-2">
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
            type="text"
            ref={passwordRef}
          />
        </label>
        <label
          className="text-lg"
          htmlFor="confirm-password"
        >
          Confirm password
          <input
            className="input"
            type="text"
            ref={confirmPasswordRef}
          />
        </label>
        <button
          className="btn bg-red-500 w-full hover:bg-red-600"
          onClick={handleSubmit}
          type="submit"
        >
          Sign up
        </button>
      </form>
      <p className="mx-auto">Already have an account? <Link className='text-blue-800 hover:underline' to='/login'>Sign in</Link></p>
    </Card>
  );

}

export default Register