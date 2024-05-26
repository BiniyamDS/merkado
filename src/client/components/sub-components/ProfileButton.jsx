import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import LoadingButton from "../LoadingButton";

function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { currentUser } = useAuth();
  return (
    <div className="">
      <button
        className="focus:outline-none h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300 text-center"
        onClick={toggleDropdown}
      >
        { currentUser.displayName ? currentUser.displayName[0].toUpperCase() : '😊'}
      </button>
      {isOpen && <ProfileDropdown />}
    </div>
  );
}

export default ProfileButton;

function ProfileDropdown({ onClose }) {
  const { currentUser, logout } = useAuth();
  return (
    <div className="absolute border-2 right-2 w-48 mt-2 origin-top-right rounded-md bg-white">
      <div className="py-1 px-3">
        {/* Add your profile details here */}
        <p>{currentUser.email}</p>
        <p>Username: {currentUser.displayName}</p>
        <LoadingButton handleAction={() => logout()}>Log out</LoadingButton>
      </div>
    </div>
  );
}
