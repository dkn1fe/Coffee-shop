import Beans from '../../beans/beans'
import girlPhoto from '../../img/imgOurCoffee/girlOurCoffee.jpg'
import './About.scss'

const AboutInfo = () => {
    return (
        <div className='about-info'>
             <div className = 'about-img'>
            <img src = {girlPhoto}></img>
             </div>
             <div className = 'about-desc'>
            <div className='about-title'>
                <h3>About our Beans</h3>
            </div>
            <div className='blackBeans'>
                <Beans />
            </div>
            <div className='about-text'>
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                </p>

                <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                </p>
            </div>
        </div>
        </div>  
    )
}

export default AboutInfo;