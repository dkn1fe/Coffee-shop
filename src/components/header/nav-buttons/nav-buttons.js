import { Link } from 'react-router-dom';
import transparentBeans from '../../img/beans/transparentBeans.svg'
import './nav-buttons.scss'

const navButtons = () => {
    return (
        <>
        <div className='container'>
            <div className='nav-buttons'>
                <ul>
                    <li><Link to = '/'>Cofee house</Link></li>
                    <li><Link to = "/second-page">Our Coffee</Link></li>
                    <li><a>For you pleasure</a></li>
                </ul>
            </div>
        </div>
        
     </>
    )
}

export default navButtons;