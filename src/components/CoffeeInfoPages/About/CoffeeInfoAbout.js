import pictureAromistico from '../../img/imgOurCoffee/pictureAromistico.jpg'
import Beans from '../../beans/beans'
import './CoffeeInfoAbout.scss'

const CoffeeInfoAbout = ({ info }) => {
    let { country, price } = info
    return (
        <div className='about-info'>
            <div className='about-img'>
                <img src={pictureAromistico}></img>
            </div>
            <div className='about-desc'>
                <div className='about-title'>
                    <h3>About It</h3>
                </div>
                <div className='blackBeans'>
                    <Beans />
                </div>
                <div className='about-text-coffee'>
                    <p>Country:{country}</p>
                    <p>Desciption:Aromistico coffee is a rich and aromatic blend of carefully selected beans from around the world. With its smooth and balanced flavor, this coffee is perfect for starting your day or enjoying a relaxing afternoon break. Indulge in the luxurious aroma and full-bodied taste of Aromistico coffee, and elevate your coffee experience to new heights.</p>
                    <p>Price:{price}</p>
                </div>
            </div>
        </div>
    )
}

export default CoffeeInfoAbout;