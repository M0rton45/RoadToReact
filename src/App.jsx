// import { useState } from 'react'
import React, { useState } from 'react';
import './App.css'

// TODO
// filtr a pizzas before render by state of input field

const App = () => {
  const initialPizzas = [
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
      },
      {
        type: 'mafioso',
        url: 'https://www.dagrasso.pl/productdetailsv2/Pizza/Mafioso?localization',
        img: './assets/mafiosa.jpg',
        price: 31.40,
        id: 2,
      }
    ];
  const [pizzas, setPizzas] = React.useState(initialPizzas);
    
  // callback to get pizzas id
  const handleClicked = (event) =>{
    console.log(pizzas);
    // console.log(event.target.id);
  // updateing a pizzas useState which item stays
  setPizzas(pizzas.filter(function (pizza) {
    // returning diffrent than been clicked
    return pizza.id !== Number(event.target.id);
  }))
    // console.log(btn);s
    // pizzas.splice(Number(event.target.id),1);
    // console.log(btn);
  }
  // Move State from Search() to App() 
  // when input field it's empty, when reload page it returns mafioso because of ||
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'mafioso'
    // if empty initial value is 'mafioso'
  );
  // on start works, but when reused then use a last id

  
  // controliing side effect (searchTerm changes) with useEffect 
  React.useEffect(() =>{
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  // Event handler in App()
  const handleSearch = (event) =>{
    // show variable from Search() input in App()
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
    // move setItem from handleSearch to useEffect to trigger side-effect only when searchTerm change
    // localStorage.setItem('searchTerm', event.target.value);
    // console.log(searchTerm);
    // console.log(pizzas[0].type);
  };
  // pizzas array with filter (with function as parm and function with parm as a element of array)
  const searchedPizzas = pizzas.filter(function (pizza){
    // pizzas.splice(btn,1)
    // console.log(pizzas.splice(1,1));
    // if(btn!=null){
    //   console.log(btn);
    //   pizza.splice(btn,1);
    //   setBtn(null);
    // }
    // now we chose what we want from element .type
    // then .includes chcecs value match with searchTerm like p$ or m$
    // console.log(searchTerm.toLowerCase());
    // console.log(btn);
    return pizza.type.toLowerCase().includes(searchTerm.toLowerCase());
  })
  // console.log(searchTerm);
  // const [count, setCount] = useState(0)

  // const title = 'React';
  //  <> and </> it's just a empty div
  return (
    <>
      {/* turn Search function with a handleSearch as a paramter for communication*/}
      <Search onSearch={handleSearch} search={searchTerm}/>
      {/* add list props for menu beacause now object is in App not in global window */}
      <Menu list={searchedPizzas} onClick={handleClicked}/>

    </>
  )
}

// controlled component with props from App() (onChange) and (value) useState for input field
const Search = ({search, onSearch}) =>{
// console.log(props.onSearch),
  // using array destruct for shorter assing
  // from props.search to search
  // destructuring in block body
  // const { search, onSearch} = props;
  return(
  <>
    <InputWithLabel
      id="search"
      onInputChange={onSearch}
      value={search}
    >
      <strong>Search:</strong> 
    </InputWithLabel>
  
  {/* Controlled element */}
    {/* <label htmlFor="search">Search: </label>
    {/* using props onSearch (handleSearch) */}
    {/* Use props to add for input initValue as a searchTerm*/}
    {/* <input 
      id="search" 
      type="text" 
      onChange={onSearch} 
      value={search}
    /> */}
    {/* when onChange users turn handleSearch function and App() update state */}
  </>
  )
}
// BUTTON REMOVER
const BtnRemover = ({
  id,
  onBtnClick,
  type = 'button',
  children,
}) => (
  <button 
    id={id} 
    type={type}
    onClick={onBtnClick}
  >
    {children}
  </button>
)
// REUSABLE INPUT
const InputWithLabel = ({
  id,
  type = 'text',
  onInputChange,
  value,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input 
      id={id}
      type={type}
      onChange={onInputChange}
      value={value}
    />
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
// destructuring props to list
const Menu = ({list,onClick}) => 
  (
    // console.log(click),
    // console.log(list),
    <ul>
      {list.map((pizza) =>(
        <Item 
          key={pizza.id} 
          pizza={pizza}
          onClick={onClick}
          // pizza={pizza}
          // type={pizza.type}
          // url={pizza.url}
          // price={pizza.price}
        />   
      ))}
    </ul>
  )
//  We can chose if we want to group elements
//  Now we chose pizzzaOnlyPrice is a object without type and url because we destructured them in Item() function
const Item = ({pizza,onClick}) => (
  // przy item nie trzeba key bo zwraca undefined
          <li>
            <span>{pizza.type}</span>
            <a href={pizza.url}>{pizza.price}</a>
            <BtnRemover
              id={pizza.id}
              onBtnClick={onClick}
            >
              Remove
            </BtnRemover> 
          </li>       
)

export default App
