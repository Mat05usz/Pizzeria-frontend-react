import './main.scss'
import MenuSection from '../menu/MenuSection'
import Contact from '../contact/Contact';
import Home from '../home/Home';
import About from '../about/About';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


interface CustomizedState {
    navID: string
  }

function Main()
{
    let location = useLocation();
    const state = location.state as CustomizedState; // Type Casting, then you can get the params passed via router
    

    useEffect(()=>{
        
        //If navigating from another page, scroll towards section that was clicked on nav,
        //e.g: Clicked on 'Menu' on Nav, go to '/' and then scroll towards 'Menu' section
        if(location.state !== null)
        {
            document.getElementById(state.navID)!.scrollIntoView();
        }
    })

    return(
        <main className="mainbody">
            <Home/>
            <About/>
            <MenuSection/>
            <Contact/>
        </main>
    );
}

export default Main;