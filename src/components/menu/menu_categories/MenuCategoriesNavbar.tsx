import "./menucategoriesnavbar.scss";
import RectangularButtonList from "../../rectangular_list/RectangularButtonList";

interface MenuNavbarProps {
  setNavbarItemClicked: React.Dispatch<React.SetStateAction<Number>>;
}

function MenuCategoriesNavbar(props: MenuNavbarProps) {
  return (
    <div className="menu-categories-navbar-wrapper">
      <RectangularButtonList
        classNames={"menu-categories-list-wrapper"}
        buttonNames={["Pizza", "Burger", "Pasta", "Salad", "Beverage"]}
        whichStartsActive={0}
        setNavbarItemClicked={props.setNavbarItemClicked}
      />
    </div>
  );
}

export default MenuCategoriesNavbar;
