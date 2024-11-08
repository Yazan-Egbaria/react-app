import { useState } from "react";
import Title from "./components/Title";
import menu from "./data/menu";
import Menu from "./components/Menu";
import Category from "./components/Category";

export default function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const tempCategories = menu.map((menuItem) => menuItem.category);
  const tempSet = new Set(tempCategories);
  const tempItems = ["all", ...tempSet];
  const [categories, setCategories] = useState(tempItems);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
    } else {
      const filteredItems = menu.filter((item) => {
        return category === item.category;
      });
      setMenuItems(filteredItems);
    }
  };

  return (
    <div
      id="mainContainer"
      className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-300 py-10"
    >
      <Title title="Our Menu" />
      <Category categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}
