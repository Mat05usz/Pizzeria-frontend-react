import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./menuitem.scss";
import "./itemdetailed.scss";
import RectangularButtonList from "../../rectangular_list/RectangularButtonList";
import { ItemDetails } from "../../../interfaces/ItemDetails";
import axios from "axios";
import MenuItem from "./MenuItem";

export default function ItemDetailed() {
  let location = useLocation();

  let navigate = useNavigate();

  const [itemDetails, setItemDetails] = useState<ItemDetails>();

  const [indexNumber, setIndexNumber] = useState<Number>(0);

  const showItemPrice = () => {
    //TODO: custom item prices(for now backend only returns a single price)
    return ["19.99$", "22.99$", "25.99$"].at(indexNumber as number);
  };

  useLayoutEffect(() => {
    let locationState = location.state as { itemDetails: ItemDetails }; //Weird typecasting due to useLocation not having proper types
    //and noone wants typescript to throw errors
    if (locationState && locationState.itemDetails) {
      //If we're coming from the main page, set itemDetails using the state passed
      setItemDetails(locationState.itemDetails);
    } //otherwise, fetch data from the server
    else {
      let queryPath = location.pathname; // Pathname in a form of /:category/:name
      axios
        .get(`http://localhost:9000/product${queryPath}`)
        .then((item) => {
          if (item.data.length) {
            let itemDetails = item.data as ItemDetails;
            setItemDetails(itemDetails);
          } else {
            throw new Error("No data!");
          }
        })
        .catch((err) => {
          console.error(err);
          navigate("/notFound");
        });
    }
  }, []);

  return (
    <section className="item-detailed-wrapper">
      {itemDetails && (
        <MenuItem
          itemDetails={itemDetails}
          children={
            <>
              <RectangularButtonList
                classNames={["item-detailed-sizes"]}
                buttonNames={["Small", "Medium", "Large"]}
                whichStartsActive={0}
                setNavbarItemClicked={setIndexNumber}
              />
              <p className="item-detailed-price">{showItemPrice()}</p>
            </>
          }
        ></MenuItem>
      )}
    </section>
  );
}
