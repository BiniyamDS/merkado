import Card from "../components/Card";
import LoadingButton from "../components/LoadingButton";
import { useRef } from "react";

const CreateAccount = () => {
  const usernameRef = useRef();
  const accountRef = useRef();
  const phoneRef = useRef();

  function handleSubmit() {
    e.preventDefault()
    
  }
  return (
    <Card>
      <h1 className="font-bold text-3xl px-2 mx-auto">Create Account</h1>
      <form className="p-2">
        <label
          className="text-xl"
          htmlFor="username"
        >
          Pick a username
          <input
            className="input"
            type="text"
            ref={usernameRef}
          />
        </label>
        <label
          className="text-xl"
          htmlFor="account-type"
        >
          Select account type
          <div className="p-2 text-lg w-3/5  justify-between flex">
            <label htmlFor="buyer">
              <input
                className=""
                type="radio"
                value='buyer'
                name="account-type"
                ref={accountRef}

              />{" "}
              Buyer
            </label>
            <label htmlFor="Merchant">
              <input
                className="px-4"
                type="radio"
                value='merchant'
                name="account-type"
                ref={accountRef}
              />{" "}
              Merchant
            </label>
          </div>
        </label>
        <label
          className="text-xl"
          htmlFor="phone-number"
        >
          Enter phone number
          <input
            className="input"
            type="phone-number"
            ref={phoneRef}
          />
        </label>
        <LoadingButton
          handleAction={handleSubmit}
          type="submit"
        >
          Finish up
        </LoadingButton>
      </form>
    </Card>
  );
};

export default CreateAccount;
