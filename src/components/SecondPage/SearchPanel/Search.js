import { Component } from 'react';
import './Search.scss'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:''
        }
    }
 
     getValueInput = (e) =>{
        this.setState({
            search:e.target.value
        })
        this.props.coffeeSearchList(this.state.search)
     }

    render(){
    return (
         <div className = 'search-panel'>
            <p>Looking for</p>
            <input onChange = {this.getValueInput} 
            type = 'text' 
            placeholder = 'start typing here...'
            ></input>
         </div>
    )
    }
}

export default Search;