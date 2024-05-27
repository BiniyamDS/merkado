import { useState } from "react";

const Hint = ({ text, children }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className=""
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <div className="absolute z-50 bottom-100 text-center rounded-md bg-gray-200 shadow-sm pointer-events-none mt-1">
          <p className="px-3 py-2 text-sm text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Hint;
