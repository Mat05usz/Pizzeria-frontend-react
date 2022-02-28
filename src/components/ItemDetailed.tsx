import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {useState} from 'react';
import '../styles/itemdetailed.scss';
import '../styles/menuitem.scss';
import RectangularButton from './RectangularButton';
import RectangularButtonList from './RectangularButtonList';


export default function ItemDetailed()
{
    let location = useLocation();

    const [indexNumber, setIndexNumber] = useState<Number>(0);

    const showItemPrice = () => {
        return ['19.99$', '22.99$', '25.99$'].at((indexNumber as number));
    }

    useEffect(() => {
        
        console.log("Rendered");
        
        return () => console.log("ItemDetailed unmounted.");
    }, []);

    return(
        <section className="item-detailed-wrapper">
            <div className="menu-item item-detailed">
           <img src={'/images/cheeseburger.png'} alt="img" className='menu-item-image item-detailed-image'></img>

            <div className="menu-item-content item-detailed-content">
                <h2 className="item-detailed-name">Cheeseburger</h2>
                <p className="item-detailed-details">
                    Ingredients: Lorem ipsum dolor sit amet consectetur.
                </p>
                <RectangularButtonList
                classNames={['item-detailed-sizes']}
                buttonNames={['Small', 'Medium', 'Large']}
                whichStartsActive={0}
                setNavbarItemClicked={setIndexNumber}
                />
                <p className="item-detailed-price">
                    {   
                        showItemPrice()  
                    }
                </p>

                <div className="item-detailed-order menu-item-order-button">Order now!</div>
            </div>
            </div>
        </section>
    );
}
//Ugly switch replacement to deal with different prices
                      /*  let arr = ['19.99$', '22.99$', '25.99$'];
                        ['19.99$', '22.99$', '25.99$'].at((indexNumber as number));
                        {
                            0: '19.99$',
                            1: '22.99$',
                            2: '25.99$'
                        }[indexNumber as number] //I'm surprised that worked
                        ['19.99$', '22.99$', '25.99$'].map((item, index) =>{
                            return index === indexNumber ? item : null;
                        })  
                        */