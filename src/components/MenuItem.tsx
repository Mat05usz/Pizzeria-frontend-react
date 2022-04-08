import "../styles/menuitem.scss";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ItemDetails } from '../interfaces/ItemDetails';

interface MenuItemProps {
  key?: number;

  itemDetails: ItemDetails;
  children?: any;
}

function MenuItem(props: MenuItemProps) {

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
      className="menu-item"
      onClick={() => {
        //handleClicked();
      }}
    >
      <img
        src={`data:image/jpeg;base64,${props.itemDetails.image}`}
        alt="img"
        className="menu-item-image"
      ></img>

      <div className="menu-item-content">
        <h2 className="menu-item-name">{props.itemDetails.name || "Margherita"}</h2>

        <span className="menu-item-price-value">{props.itemDetails.price || "19.99"}$</span>
        <p className="menu-item-desc">
          <span className="menu-item-desc-highlight">Ingredients: </span>
          {props.itemDetails.description ||
            `Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquid?`}
        </p>

          {props.children ?? <div className="menu-item-details-button">
          <Link
            to={`/item/${props.itemDetails.name}`}
            state={{
              itemDetails: props.itemDetails
            }}
          >
            <p>Details</p>
          </Link>
        </div>}

        
        <div className="menu-item-order-button">
          <p>Order now!</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
