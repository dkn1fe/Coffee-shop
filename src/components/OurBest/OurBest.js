 import CardForBest  from "../OurBest/cardForBest"
 import firstCard from '../img/ImgOurBest/firstCard.png'
 import secondCard from '../img/ImgOurBest/secondCard.png'
 import thirdCard from '../img/ImgOurBest/thirdCard.png'
 import './OurBest.scss'

 const OurBest = () => {
    return (
        <>
          <div className = "best-title">
               <h3>Our Best</h3>
          </div>
          <div className = 'best-card'>
          <CardForBest img = {firstCard}  title = 'Solimo Coffee Beans 2 kg' price = '10.73$'/>
          <CardForBest img = {secondCard} title = 'Presto Coffee Beans 1 kg' price = '15.99$'/>
          <CardForBest img = {thirdCard}  title = 'AROMISTICO Coffee 1 kg'   price = '6.99$'/>
          </div>
          </>
        )
 }

 export default OurBest;