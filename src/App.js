import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Players = ["Ronaldo", "Messi", "Neymar", "Jesus", "Hazard"]
  const products = [
    {name: "Photoshop", price: "$90"},
    {name: "Illustrator", price: "$50.55"}
  ]
  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Users></Users>

      <ul>
      {
        Players.map(player => <li>{player}</li>)
      }
      {
        products.map(product => <li>{product.name}</li>)
      }
      </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        {
          Players.map(player=> <Person player={player}></Person>)
        }

        <Person name={Players[0]} club="Juventus" home="Portugal"></Person>
        <Person name={Players[1]} club="Barcelona" home="Argentina"></Person>
        <Person name={Players[2]} club="PSG" home="Brazil"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(3);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "2px solid yellow",
    borderRadius: "5px",
    color: "black",
    fontFamily: "arial",
    backgroundColor: "lightgray",
    margin: "20px",
    hight: "200px",
    width: "200px",
    float: "left"
  }
  const {name, price} = props.product;
  return (
  <div style={productStyle}>
    <h2>{name} </h2>
    <h3>{price}</h3>
    <button>Buy Now</button>
  </div>
  )
}

function Person(props) {
  const personStyle={
    border:"2px solid blue",
    margin: "10px",
    width: "500px"
  }
  // console.log(props)
  return (
  <div style={personStyle}>
  <h1>Name: {props.name}</h1>
  <h3>Club: {props.club}</h3>
  <h5>The Ultimate {props.home} Superstar</h5>
  </div>
  )
}

export default App;
