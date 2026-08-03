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
  const handleSearch = (event) =>{
    console.log(event.target.value);
  };
  // const [count, setCount] = useState(0)

  // const title = 'React';
  //  <> and </> it's just a empty div
  return (
    <>
      <Search onSearch={handleSearch}/>
      {/* add list for menu beacause now object is in App not in global window */}
      <Menu list={pizzas}/>
    </>
  )
}
const Search = (props) => {
  // in () of useState we compose a default value
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    // console.log(event);
    setSearchTerm(event.target.value);
    props.onSearch(event);
    // console.log(event.target.value);
    // returning value from input when input have changes
  };

  return(
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange}/>
      {/* dostajemy aktualną zawartość inputa na stronie */}
      <p>{searchTerm}</p>
      {/* handleChange without ()  */}
    </>
  );
}
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
