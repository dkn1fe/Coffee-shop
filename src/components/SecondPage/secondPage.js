import { Component } from 'react'
import HeaderOurCoffee from "./header/headerOurCoffee"
import AboutInfo from "./About/About";
import Line from '../SecondPage/About/Line/Line'
import Search from "../SecondPage/SearchPanel/Search";
import ButtonsFilter from "../SecondPage/Filter/Filter";
import CoffeeList from "./CoffeeList/CoffeeList";
import ThirdCard from '../img/ImgOurBest/thirdCard.png'
import FirstCard from '../img/ImgOurBest/firstCard.png'
import SecondCard from '../img/ImgOurBest/secondCard.png'
import './secondPage.scss'

class SecondPage extends Component{
   constructor(props){
      super(props)
      this.state = {
         coffeeListInfo:[
            {img:ThirdCard,title:'Aromistico Coffee 1 kg',country:'Brazil',price:'5,77$',id:1},
            {img:FirstCard,title:'Pasito Coffee 1 kg',country:'Kenya',price:'5,77$',id:2},
            {img:SecondCard,title:'Aegis Coffee 1 kg',country:'Columbia',price:'5,77$',id:3},
            {img:FirstCard,title:'Bar Coffee 1 kg',country:'Brazil',price:'5,77$',id:4},
            {img:ThirdCard,title:'Lenin Coffee 1 kg',country:'Kenya',price:'5,77$',id:5},
            {img:SecondCard,title:'Aromistico Coffee 1 kg',country:'Columbia',price:'5,77$',id:6},
            {img:FirstCard,title:'Aromistico Coffee 1 kg',country:'Brazil',price:'5,77$',id:7},
         ],
         search:'',
         filter:'',
      }
   }
    onSearchItems = (coffeeList,search) => {
      if(search.length === 0){
         return coffeeList;
      }
      return coffeeList.filter(item => {
         return item.title.indexOf(search)  > -1
      })
    }

    getSearchItems = (search) =>{
      this.setState({
         search:search
      })
    }

    onFilterItems = (coffeeList,filter) =>{
       switch(filter){
          case 'Brazil':
            return coffeeList.filter(item => item.country === 'Brazil')
            case 'Kenya':
               return coffeeList.filter(item => item.country === 'Kenya')
               case 'Columbia':
                  return coffeeList.filter(item => item.country === 'Columbia')
                  case 'All':
                     return coffeeList

                  default:
                     return coffeeList
       }
    }

    getFilterByName = (filter) =>{
      this.setState({
         filter:filter
      })
    }
 
    
 

   render(){    
      let {coffeeListInfo,search,filter} = this.state
      const coffeeSearchList = this.onFilterItems(this.onSearchItems(coffeeListInfo,search),filter)
     return (
        <>
         <header className = 'header-second'>
              <HeaderOurCoffee/>
         </header>
         <section className = 'about-second'>
            <AboutInfo/>
            <Line/>
         </section>
         <div className = 'search-panel-second'>
               <Search coffeeSearchList = {this.getSearchItems}/>
               <ButtonsFilter filter = {filter} getFilterByName = {this.getFilterByName}/>
         </div>
         <section className = 'coffeeList'>
            <CoffeeList  coffeeListInfo = {coffeeSearchList}/>
         </section>
        </>
     )
     }
}

export default SecondPage;