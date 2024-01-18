import blackTransparentBeans from   '../img/beans/blackTransparentBeans.svg'
import BeansBlack from '../beans/beans'
import './footer.scss'

 const footer = () => {
    return ( 
        <div className='container'>
        <div className='footer-buttons'>
            <ul>
                <li><img src={blackTransparentBeans}></img>Cofee house</li>
                <li><a>Our Cofee</a></li>
                <li><a>For you pleasure</a></li>
            </ul>
        </div>
        <div className  = 'blackBeans'>
            <BeansBlack/>
        </div>
    </div>
    )
 }

 export default footer;