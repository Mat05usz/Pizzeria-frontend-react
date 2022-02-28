import '../styles/menucategories.scss';
import MenuCategoriesContent from './MenuCategoriesContent';
import MenuCategoriesNavbar from './MenuCategoriesNavbar';
import { useState, useEffect } from 'react';
import {useRef} from 'react';
import MenuFavouriteDish from './MenuFavouriteDish';



function MenuCategories()
{
    const [navbarItemClicked, setNavbarItemClicked] = useState<Number>(0);

    //let menuContentData = useRef([[{}]])

    //fetch data
    useEffect(()=>{
        console.log(navbarItemClicked)
    }, [navbarItemClicked])

    return(
        <div className="menu-categories-wrapper">
           {// <MenuFavouriteDish/>
           }
            <MenuCategoriesNavbar setNavbarItemClicked = {setNavbarItemClicked}/>
            <MenuCategoriesContent/>
        </div>
    );
}

export default MenuCategories;