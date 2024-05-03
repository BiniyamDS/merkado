import Card from "../components/Card"
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
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

    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      setError('Passwords do not match')
    }

    console.log('submitted', usernameRef.current.value, passwordRef.current.value)
  }


  return (
    <Card>
      <h1 className="font-bold text-3xl px-2 mx-auto">Sign up</h1>
      {error && <h1 className="error">{error}</h1>}
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
            type="password"
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
            type="password"
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
      <p className="mx-auto text-lg">Already have an account? <Link className='text-blue-800 hover:underline' to='/login'>Sign in</Link></p>
    </Card>
  );

}

export default Register