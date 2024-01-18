import { useLocation } from "react-router-dom";
import HeaderOurCoffee from "../SecondPage/header/headerOurCoffee"
import CoffeeInfoAbout from "./About/CoffeeInfoAbout";
import Footer from "../footer/footer";
import './CoffeeInfoPages.scss'

const  CoffeeInfoPages = () => {
   let { state } = useLocation();
   return (
         <>
          <header className="header-second">
             <HeaderOurCoffee/>
          </header>
          <section className="coffee-pages">
             <CoffeeInfoAbout  info = {state.coffeeItem}/>
          </section>
          <footer className="footer">
             <Footer/>
          </footer>
          </>
    )
   }

export default CoffeeInfoPages;
