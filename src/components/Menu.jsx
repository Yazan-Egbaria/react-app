import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
