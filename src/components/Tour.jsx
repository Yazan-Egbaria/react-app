const Tour = ({ id, image, info, name, price, removeTour }) => {
  // Fix: wrap the removeTour function call inside an anonymous function to trigger on click
  const handleRemove = () => {
    removeTour(id); // Now removeTour is called only when the button is clicked
  };

  return (
    <div className="flex w-[350px] flex-col justify-between gap-4 shadow-lg">
      <img src={image} alt={name} className="h-[300px] w-full object-cover" />
      <p className="px-4 font-bold text-gray-600">Price: {price}</p>

      <div className="flex flex-col gap-4 px-4 pb-4">
        <h5 className="text-lg font-bold">{name}</h5>
        <p>{info}</p>
        <button type="button" onClick={handleRemove}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
