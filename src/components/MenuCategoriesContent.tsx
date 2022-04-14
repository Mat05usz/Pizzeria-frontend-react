import { useLayoutEffect } from "react";
import "../styles/menucategoriescontent.scss";
import MenuItem from "./MenuItem";
import { useState } from "react";
import axios from "axios";
import { ItemDetails } from "../interfaces/ItemDetails";

function MenuCategoriesContent() {
  const [itemsDetails, setItemsDetails] = useState<ItemDetails[]>([]);

  useLayoutEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL + '/product'}`).then((items) => {
      if (items) {
        
        setItemsDetails(items.data);
      }
    });
  }, []);

  return (
    <div className="menu-categories-content-wrapper">
      {itemsDetails.map((item, index) => 
      {
        return <MenuItem
          itemDetails={item}
          key={index}
        />
})}
    </div>
  );
}

export default MenuCategoriesContent;
