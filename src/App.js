import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage'
import SecondPage from "./components/SecondPage/secondPage";
import CoffeeInfoPages from './components/CoffeeInfoPages/CoffeeInfoPage'
import './App.scss';

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/second-page" element={<SecondPage />} />
            <Route path='/coffeeInfo-page' element = {<CoffeeInfoPages/>}/>
         </Routes>
      </>
   );
}

export default App;
