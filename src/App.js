
import './App.css';
import Card from './card';
import { useState } from 'react';


function App() {

  const [arr, setArr] = useState([{id:1, title: "Pudge Arcana", price: 45+"$", image: "./images/pudge.webp", description:"A set of Pudge." ,category: "Strength"}, 
  {id:2, title: "Invoker", price: 65+"$", image: "./images/invoker.jpg", description:"A set of Invoker.",category: "Intelligence" },
   {id:3, title: "Ursa", price: 36+"$", image: "./images/ursa.jpg", description:"A set of Ursa Warior.",category: "Strength" },
    {id:4, title: "Juggernaut", price: 55+"$", image: "./images/juggernaut.jpg", description:"A set of Juggernaut.",category: "Agility" }, 
    {id:5, title: "Earth Shaker", price: 42+"$", image: "./images/es.jpg" , description:"A set of Earth Shaker.",category: "Strength"}]);
  



  
  return (
    <div className="App">
      <div className="heading"><h1>DOTA 2 HEROES</h1></div>
      <header className="App-header">
        
        {
          arr.map((e,index) => {
            return (<div key={index}><Card title={e.title} price={e.price} img={e.image} desc={e.description} category={e.category} /></div>)
          })
        }
      </header>
    </div>
  );
}

export default App;