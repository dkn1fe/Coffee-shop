
import './Filter.scss'

const ButtonsFilter = (props) => {
   const buttonsInfo = [
    {name:'All',label:'All'},
    {name:'Brazil',label:'Brazil'},
    {name:'Kenya',label:'Kenya'},
    {name:'Columbia',label:'Columbia'},
]
 const buttons = buttonsInfo.map(({name,label})=>{
    const active = props.filter === name;
    const clazz = active ? 'active' : ' '
    return (
         <button onClick = {() => props.getFilterByName(name)} className = {`btn ${clazz}` } key = {name} >{label}</button>
    )
 })
    return (
        <div className='filter'>
            <div className='filter-text'>
                <p>Or filter</p>
            </div>
            <div className='filter-buttons'>
               {buttons}
            </div>
        </div>
    )
}

export default ButtonsFilter;