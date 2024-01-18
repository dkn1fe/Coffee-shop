import CoffeeListItems from "../CoffeeListItem/coffeeListItems"



const coffeeList = ({ coffeeListInfo }) => {
 const  getFindCoffeeInfo = (id) => {
     return coffeeListInfo.find(item => item.id === id)
  }
  const coffeeCards = coffeeListInfo.map(item => {
    const { id, ...coffeeItems } = item;
    return (
      <CoffeeListItems
        key={id}
        {...coffeeItems}
        coffeeItem = {getFindCoffeeInfo(id)}
      />
      
    )
  })
  return (
    <>
      {coffeeCards}
    </>
  )
}

export default coffeeList;