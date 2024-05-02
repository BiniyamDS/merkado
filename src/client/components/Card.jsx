const Card = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div
        className=" flex flex-col mx-auto pt-16 w-1/2 h-96"
        style={{ maxWidth: "400px" }}
      >
        <img src="/logo.png" className="mb-5" alt="logo-merkado" />
        <div className="flex flex-col border-2 p-8 rounded-md shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default Card;
