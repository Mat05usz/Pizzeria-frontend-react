import "../styles/menusection.scss";
import MenuTextContent from "./MenuTextContent";
import MenuCategories from "./MenuCategories";
import SectionTitle from "./SectionTitle";

function MenuSection() {
  return (
    <>
      <SectionTitle text="Menu" backgroundImg="images/fastfood01.png"/>
      <section id="menu" className="menu-section">
        {//<MenuTextContent />
}
        <MenuCategories />
      </section>
    </>
  );
}

export default MenuSection;
