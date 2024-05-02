const Card = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div
        className=" flex flex-col mx-auto pt-16 w-1/2 h-96"
        style={{ maxWidth: "400px" }}
      >
        <h1 className="mx-auto text-4xl text-slate-500 font-bold mb-5">Merkado</h1>
        <div className="flex flex-col border-2 p-8 rounded-md shadow-md">{children}</div>
      </div>
    </div>
  );
};

export default Card;
