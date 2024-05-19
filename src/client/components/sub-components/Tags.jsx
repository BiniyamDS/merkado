const Tags = ({ tags }) => {
  return (
    <div className="flex">
      {tags.map((tag) => (
        <p
          onClick={(e) => e.stopPropagation()}
          key={tag}
          className="my-2 mx-1 hover:text-black rounded-md text-gray-500 px-1 border-2 italic"
        >
          #{tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
