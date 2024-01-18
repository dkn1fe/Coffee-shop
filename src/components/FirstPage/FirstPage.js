import Header from "../header/header";
import AboutInfo from "../About/About";
import OurBest from "../OurBest/OurBest";
import Footer from "../footer/footer";
import './FirstPage.scss'

const FirstPage = () => {
    return (
        <div>
        <header className='header'>
           <Header />
        </header>
        <section className='about'>
           <AboutInfo />
        </section>
        <section className='ourBest'>
           <OurBest />
        </section>
        <footer className='footer'>
           <Footer />
        </footer>
  </div>
    )
}

export default FirstPage;