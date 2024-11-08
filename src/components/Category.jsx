const Category = ({ categories, filterItems }) => {
  return (
    <div className="flex gap-2">
      {categories.map((category) => {
        return (
          <button
            className="rounded border border-transparent bg-amber-600 px-2 py-1 capitalize text-white transition-all duration-300 hover:border-amber-600 hover:bg-white hover:text-amber-600"
            key={category}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
