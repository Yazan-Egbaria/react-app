const Title = ({ title }) => {
  return (
    <h1 className="border-b-2 border-b-amber-500 text-4xl">
      {title || "Default Title"}
    </h1>
  );
};

export default Title;
