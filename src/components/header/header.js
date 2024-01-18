  import Buttons from "./nav-buttons/nav-buttons"
  import TitleInfo from './background-title/background-title'
  import './header.scss'

 const Header = () => {
     return (
        <div>
             <Buttons/>
             <div className = 'header-desc'>
                  <TitleInfo/>
             </div>
     </div>
     )
 }

 export default Header