import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenido a Milkycream'/>
    </div>
  );
}

export default App;
