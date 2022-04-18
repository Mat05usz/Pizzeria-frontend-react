import "./menucategories.scss";
import MenuCategoriesContent from "./MenuCategoriesContent";
import MenuCategoriesNavbar from "./MenuCategoriesNavbar";
import { useState, useEffect } from "react";

function MenuCategories() {
  const [navbarItemClicked, setNavbarItemClicked] = useState<Number>(0);

  //fetch data
  useEffect(() => {
    console.log(navbarItemClicked);
  }, [navbarItemClicked]);

  return (
    <div className="menu-categories-wrapper">
      {
        // <MenuFavouriteDish/>
      }
      <MenuCategoriesNavbar setNavbarItemClicked={setNavbarItemClicked} />
      <MenuCategoriesContent />
    </div>
  );
}

export default MenuCategories;
