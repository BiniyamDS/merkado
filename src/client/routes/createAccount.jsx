import Card from "../components/Card";
import LoadingButton from "../components/LoadingButton";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

const CreateAccount = () => {
  const usernameRef = useRef();
  const phoneRef = useRef();

  const [error, setError] = useState();
  const navigate = useNavigate();

  const { currentUser, updateUser } = useAuth();

  const [accountType, setSelectedValue] = useState("1"); // Initial selected value (optional)

  function handleRadioChange(event) {
    setSelectedValue(event.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError();
    if (!usernameRef.current.value || !phoneRef.current.value) {
      setError("Please enter a username and phone number");
      return;
    }

    try {
      updateProfile(auth.currentUser, {
        displayName: usernameRef.current.value,
      });
      
      updateUser(accountType, phoneRef.current.value)
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Card>
      {/* {JSON.stringify(currentUser)} */}
      {error && <p className="error">{error}</p>}
      <h1 className="font-bold text-3xl px-2 mx-auto">Create Account</h1>
      <form className="p-2">
        <label className="text-xl" htmlFor="username">
          Pick a username
          <input className="input" type="text" ref={usernameRef} />
        </label>
        <label className="text-xl" htmlFor="account-type">
          Select account type
          <div className="p-2 text-lg w-3/5  justify-between flex">
            <label>
              <input
                type="radio"
                value="1"
                name="account-type" // Ensures single selection
                onChange={handleRadioChange}
                defaultChecked
              />{" "}
              Buyer
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="account-type"
                onChange={handleRadioChange}
              />{" "}
              Merchant
            </label>
          </div>
        </label>
        <label className="text-xl" htmlFor="phone-number">
          Enter phone number
          <input className="input" type="phone-number" ref={phoneRef} />
        </label>
        <LoadingButton handleAction={handleSubmit} type="submit">
          Finish up
        </LoadingButton>
      </form>
    </Card>
  );
};

export default CreateAccount;
