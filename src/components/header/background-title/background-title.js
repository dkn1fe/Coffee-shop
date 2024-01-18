 import './background-title.scss'
 import whiteBeans from '../../img/beans/whiteBeans.svg'

 const backgroundTitle = () => {
     return (
         <div className = 'header-info'>
             <div className = 'header-title'>
                    <h2>Everything You Love About Coffee</h2>
             </div> 
              <div className = 'beans'>
                  <div></div>
                  <img src = {whiteBeans}></img>
                  <div></div>
              </div>
              <div className = 'header-subtitle'>
                <h3>We makes every day full of energy and taste</h3>
                <h3>Want to try our beans?</h3>
              </div>
              <div className = 'header-button'>
                 <button>More</button>
              </div>
         </div>
     )
 }

 export default backgroundTitle;