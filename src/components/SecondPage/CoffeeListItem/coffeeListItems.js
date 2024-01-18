import './coffeeListItems.scss';
import { Link } from 'react-router-dom';

const coffeeListItems = ({coffeeItem}) => { 
    const {img,title,country,price} = coffeeItem
    return (
        <Link to = '/coffeeInfo-page' state = {{coffeeItem}} >
            <div   className = 'coffee-card'> 
            <div className = 'coffee-container'>
                 <div className = 'coffee-img'>
                     <img src = {img}></img>
                 </div>
                 <div className = 'coffee-title'>
                     <p>{title}</p>
                 </div>
                 <div className = 'coffee-country'>
                     <p>{country}</p>
                 </div>
                 <div className = 'coffee-price'>
                     <p>{price}</p>
                 </div>
            </div>
        </div>
        </Link>
    )
}

export default coffeeListItems;