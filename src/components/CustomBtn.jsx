const CustomBtn = (props) => {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="p-4"
      onClick={() => props.listColor(props.color)}
    >
      {props.color}
    </button>
  );
};

export default CustomBtn;
