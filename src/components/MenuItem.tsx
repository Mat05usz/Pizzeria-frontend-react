import "../styles/menuitem.scss";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface MenuItemProps {
  additionalClasses?: string[];
  key?: number;

  name: string;
  price: number;
  description: string;
  image: string;
}

function MenuItem(props: MenuItemProps) {
  const { additionalClasses } = props;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    //gsap.fromTo('.menu-item', {bottom: "-50", opacity:"0"}, {bottom: "0", opacity:"1", duration: "2"});
  }, [inView]);

  return (
    <div
      ref={ref}
      className={["menu-item", ...additionalClasses!].join(" ")}
      onClick={() => {
        //handleClicked();
      }}
    >
      <img
        src={`data:image/jpeg;base64,${props.image}`}
        alt="img"
        className="menu-item-image"
      ></img>

      <div className="menu-item-content">
        <h2 className="menu-item-name">{props.name || "Margherita"}</h2>

        <span className="menu-item-price-value">{props.price || "19.99"}$</span>
        <p className="menu-item-desc">
          <span className="menu-item-desc-highlight">Ingredients: </span>
          {props.description ||
            `Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquid?`}
        </p>

        <div className="menu-item-details-button">
          <p>Details</p>
        </div>
        <div className="menu-item-order-button">
          <p>Order now!</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
