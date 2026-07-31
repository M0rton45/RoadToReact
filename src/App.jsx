// import { useState } from 'react'
import './App.css'

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
]


const App = () => {
  // const [count, setCount] = useState(0)

  // const title = 'React';
  //  <> and </> it's just a empty div
  return (
    <>
      <Search />
      <Menu />
    </>
  )
}
const Search = () => {
  return(
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </>
  );
}
const Menu = () => {
  return(
    <ul>
      {pizzas.map(function (pizza){
        return(
          <li key={pizza.id}>
            <span>{pizza.type}</span>
            <a href={pizza.url}>{pizza.price}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default App
