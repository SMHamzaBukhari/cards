
import './App.css';
import Card from './card';
import { useState } from 'react';


function App() {

  const [arr, setArr] = useState([{ title: "Pudge Arcana", price: 45, image: "./images/pudge.webp", description:"A set of Pudge." }, 
  { title: "Invoker", price: 65, image: "./images/invoker.jpg", description:"A set of Invoker." },
   { title: "Ursa", price: 36, image: "./images/ursa.jpg", description:"A set of Ursa Warior." },
    { title: "Juggernaut", price: 55, image: "./images/juggernaut.jpg", description:"A set of Juggernaut." }, 
    { title: "Earth Shaker", price: 42, image: "./images/es.jpg" , description:"A set of Earth Shaker."}]);
  
  let quantity = () =>{
    console.log("Quantity");
  }
  let addToCart = () => {
    console.log("Add to Cart");
  };
  return (
    <div className="App">
      <div className="heading"><h1>DOTA 2 HEROES</h1></div>
      <header className="App-header">
        
        {
          arr.map((e) => {
            return (<Card title={e.title} price={e.price} img={e.image} desc={e.description} action1={addToCart} action2={quantity} />)
          })
        }
      </header>
    </div>
  );
}

export default App;