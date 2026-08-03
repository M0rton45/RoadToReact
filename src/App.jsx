// import { useState } from 'react'
import React from 'react';
import './App.css'



const App = () => {
  const pizzas = [
    {
      type: 'margherita',
      url: 'https://aniagotuje.pl/przepis/pizza-margherita',
      img: './assets/margherita.jpg',
      price: 24.90,
      id: 0,
    },
    {
      type: 'pepperoni',
      url: 'https://aniagotuje.pl/przepis/pizza-pepperoni',
      img: './assets/pepperoni.jpg',
      price: 29.90,
      id: 1,
    }
  ];
  // Move State from Search() to App() 
  const [searchTerm, setSearchTerm] = React.useState('');
  // Event handler in App()
  const handleSearch = (event) =>{
    // show variable from Search() input in App()
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  // const [count, setCount] = useState(0)

  // const title = 'React';
  //  <> and </> it's just a empty div
  return (
    <>
      {/* turn Search function with a habdleSearch as a paramter for communication*/}
      <Search onSearch={handleSearch}/>
      {/* add list props for menu beacause now object is in App not in global window */}
      <Menu list={pizzas}/>
    </>
  )
}
const Search = (props) =>(
  <>
    <label htmlFor="search">Search: </label>
    {/* using props onSearch (handleSearch) */}
    <input id="search" type="text" onChange={props.onSearch}/>
    {/* when onChange users turn handleSearch function and App() update state */}
  </>
)
// add props
// const Search = (props) => {
//   // in () of useState we compose a default value

//   const handleChange = (event) => {
//     // console.log(event);
//     // executed  props onSearch as callback handler
//     props.onSearch(event);
//     // console.log(event.target.value);
//     // returning value from input when input have changes
//   };

//   return(
//     <>
//       <label htmlFor="search">Search: </label>
//       <input type="text" id="search" onChange={props.onSearch}/>
//       {/* dostajemy aktualną zawartość inputa na stronie */}
//       {/* <p>{searchTerm}</p> */}
//       {/* handleChange without ()  */}
//     </>
//   );
// }
// now Menu need props to use pizzas
const Menu = (props) => (
    <ul>
      {props.list.map((pizza) =>(
        <Item key={pizza.id} pizza={pizza}/>   
      ))}
    </ul>
)
const Item = (props) => (
  // przy item nie trzeba key bo zwraca undefined
          <li>
            <span>{props.pizza.type}</span>
            <a href={props.pizza.url}>{props.pizza.price}</a>
          </li>       
)

export default App
