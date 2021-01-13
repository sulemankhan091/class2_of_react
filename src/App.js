// import './App.css';
import React from 'react';
import Dinner from './Dinner';


function App() {
  return (
    <div> 
    <Dinner  Dishname="Chiken Karahi" SweetDishname="Kheer"/><hr/>
    <Dinner Dishname="Chiken Butter" SweetDishname="Firni"/><hr/>
    <Dinner Dishname="Chiken Paratha" SweetDishname="Patessa"/>
    </div>
);
}

export default App;
