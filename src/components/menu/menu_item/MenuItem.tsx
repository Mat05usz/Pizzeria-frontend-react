import "./menuitem.scss";
import { useEffect, useRef, MutableRefObject } from 'react';
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ItemDetails } from "../../../interfaces/ItemDetails";

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

  let buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //gsap.fromTo('.menu-item', {bottom: "-50", opacity:"0"}, {bottom: "0", opacity:"1", duration: "2"});
  }, [inView]);

  return (
    <div
      ref={ref}
      className="menu-item"
      onMouseOver={() => {
        if(buttonRef.current)
          buttonRef.current.style.display = "block"; 
      }}
      onMouseLeave={()=>{
        if(buttonRef.current)
          buttonRef.current.style.display = "none"; 
      }}
    >
      <img
        src={`data:image/jpeg;base64,${props.itemDetails.image}`}
        alt="img"
        className="menu-item-image"
        style={{ border: "none" }}
      ></img>

      <div className="menu-item-content">
        <h2 className="menu-item-name">
          {props.itemDetails.name || "Margherita"}
        </h2>
        <p className="menu-item-desc">
          {props.itemDetails.description ||
            `Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi, aliquid?`}
        </p>
        <span className="menu-item-price-value">
          {props.itemDetails.price || "19.99"}$
        </span>

        {props.children}

        {/*<Link
            to={`/item/${props.itemDetails.name}`}
            state={{
              itemDetails: props.itemDetails
            }}
            className="menu-item-details-button"
          >
            <p>Details</p>
          </Link>*/
}

        <div ref={buttonRef} className="menu-item-order-button">
          <p>Order</p>
        </div>
          
      </div>
    </div>
  );
}

export default MenuItem;
