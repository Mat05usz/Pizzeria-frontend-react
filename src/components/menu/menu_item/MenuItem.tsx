import "./menuitem.scss";
import { useEffect, useRef, MutableRefObject } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ItemDetails } from "../../../interfaces/ItemDetails";
import { gsap } from "gsap";

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

  let menuItemRef = useRef<HTMLDivElement>(null);
  let buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //gsap.fromTo('.menu-item', {bottom: "-50", opacity:"0"}, {bottom: "0", opacity:"1", duration: "2"});
  }, [inView]);

  return (
    <div className="menu-item-wrapper">
      <div
        ref={menuItemRef}
        className="menu-item"
        onMouseOver={() => {
          if (props.children) return;
          
          menuItemRef.current!.style.zIndex = "100";
          gsap.to(buttonRef.current, {
            onStart: () => {
              menuItemRef.current!.style.position = "absolute";
            },
            maxHeight: "200px",
            duration: 2,
            overwrite: "auto",
          });
        }}
        onMouseLeave={() => {
          if (props.children) return;

          gsap.to(buttonRef.current, {
            onStart: () => {
              menuItemRef.current!.style.zIndex = "0";
            },
            onComplete: () => {
              menuItemRef.current!.style.position = "relative";
            },
            maxHeight: "0px",
            paddingBottom: "0",
            duration: 0.5,
            overwrite: "auto",
          });
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

          <div ref={buttonRef} className="button-container">
            <Link
              to={`/item/${props.itemDetails.name}`}
              state={{
                itemDetails: props.itemDetails,
              }}
              className="menu-item-order-button"
            >
              <p>Order</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
