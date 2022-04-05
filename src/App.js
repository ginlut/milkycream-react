import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/ItemCount/ItemCount';


const App = () => {
  const [show, setShow] = useState(true)
    const handleOnAdd = (quantity) => {
     console.log(`${quantity} productos fueron añadidos al carrito`)
   }
 
   return (
    <div className="App">  
     <NavBar />
     <ItemListContainer greeting={'Bienvenido a Milkycream'} />
     { show && <Counter initial={1} stock={10} onAdd={handleOnAdd}/> }
    </div>
);
 }

export default App;
