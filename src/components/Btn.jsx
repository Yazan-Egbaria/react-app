const Btn = (props) => {
  return (
    <button
      className="w-full bg-blue-600 font-bold text-white"
      onClick={props.btnFn}
    >
      Clear All
    </button>
  );
};

export default Btn;
