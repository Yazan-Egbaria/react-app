const MenuItem = ({ img, title, price, desc }) => {
  return (
    <div className="flex w-96 flex-col rounded bg-white pb-4 shadow-md">
      <img
        src={img}
        alt={title}
        className="h-96 w-96 rounded rounded-b-none object-cover"
      />

      <div id="item-info">
        <header className="flex items-center justify-between p-4 font-bold capitalize">
          <h5>{title}</h5>
          <span className="rounded bg-amber-600 px-2 text-white">${price}</span>
        </header>

        <p className="px-4 text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
