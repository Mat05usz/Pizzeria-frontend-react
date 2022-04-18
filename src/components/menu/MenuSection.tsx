import "./menusection.scss";
import MenuCategories from "./menu_categories/MenuCategories";
import SectionTitle from "../section_title/SectionTitle";

function MenuSection() {
  return (
    <>
      <SectionTitle text="Menu" backgroundImg="images/fastfood01.png" />
      <section id="menu" className="menu-section">
        {
          //<MenuTextContent />
        }
        <MenuCategories />
      </section>
    </>
  );
}

export default MenuSection;
