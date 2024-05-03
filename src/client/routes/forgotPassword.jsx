import Card from "../components/Card";
import { useRef, useEffect, useState } from "react";
import LoadingButton from "../components/LoadingButton";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError();
    setSuccess(false);
    if (!emailRef.current.value) {
      setError("Please enter an email address");
      return;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setSuccess(true);
        resolve();
      }, 2000);
    });
  }

  return (
    <Card>
      <h1 className="font-bold text-3xl pb-2 mx-auto">Reset Password</h1>
      {error && <h1 className="error">{error}</h1>}
      {success && (
        <h1 className="success">Check your email for further instructions!</h1>
      )}
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
        <LoadingButton
          handleAction={handleSubmit}
          type="submit"
        >
          Reset Password
        </LoadingButton>
        <p className="mx-auto text-lg">
          Head back to{" "}
          <Link
            to="/login"
            className="links"
          >
            login
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default ForgotPassword;
