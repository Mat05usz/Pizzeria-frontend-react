import { useLayoutEffect } from 'react';
import '../styles/menucategoriescontent.scss';
import MenuItem from './MenuItem';
import {useState} from 'react';
import axios from 'axios';

interface ItemDetails {
    name: string,
  price: number,
  description: string,
  image: string
}



function MenuCategoriesContent()
{

    const [itemsDetails, setItemsDetails] = useState<ItemDetails[]>([]);

    useLayoutEffect(() => {
         
        axios.get('http://localhost:9000/product').then((items) => {
            if(items)
            {
                setItemsDetails(items.data);
            }
        })
    }, [])

    return(
        <div className="menu-categories-content-wrapper">
            {
                itemsDetails.map((item, index) =>(
                    <MenuItem name={item.name} description={item.description} price={item.price} image={item.image} additionalClasses={[]} key={index}/>
               ))
                }
        </div>
    )
}

export default MenuCategoriesContent;