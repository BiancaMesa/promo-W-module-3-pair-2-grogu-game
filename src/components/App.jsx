import Header from "./Header";

import Footer from "./Footer";
import Game from "./Game";
import Instructions from "./Instructions";
import Options from "./Options";
import { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import '../scss/App.scss'; 

function App() {
const [diceValue, setDiceValue] = useState(null); 
const [groguPosition, setGroguPosition] = useState(0);
const [cookies, setCookies] = useState(["🍪 ", "🍪 ", "🍪"]); 
const [eggs, setEggs] = useState(["🥚 ", "🥚 ", "🥚"]); 
const [frogs, setFrogs] = useState(["🐸 ", "🐸 ", "🐸"]); 
const [gameState, setGameState] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');

function rollDice () {
  const randomNumber = Math.floor(Math.random() * 4)+1;
  setDiceValue(randomNumber);
  console.log(randomNumber); 

  if(randomNumber === 4) {
    setGroguPosition(groguPosition +1);
    setMessage(`Grogu ha avanzado una casilla${name && `, ${name}`}`); 
  }

  if (randomNumber === 1 && cookies.length !== 0) {
    const updatedCookies = cookies.slice(0, -1); 
    setCookies(updatedCookies);
    setMessage(`Has guardado una galleta!`);
  }

    if (randomNumber === 2 && eggs.length !== 0) {
      const updatedEggs = eggs.slice(0, -1); 
      setEggs(updatedEggs);
      setMessage(`Has guardado un huevo!`);
    }

    if (randomNumber === 3 && frogs.length !== 0) {
      const updatedFrogs = frogs.slice(0, -1); 
      setFrogs(updatedFrogs);
      setMessage(`Has guardado una rana!`);
    }
  }

useEffect(() => {
if (groguPosition ===6){
  setGameState ('¡¡Grogu se ha comido el cargamento!! Has perdido.');
} else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0){
  setGameState ('Enhorabuena, has ganado! Mando completa la misión!');
}
}, [groguPosition, cookies, eggs, frogs]);


  return (
    <>
      <Header name={name}/>

      <Routes>
        <Route path="/instructions" element={<Instructions />}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/game" element={<Game setName={setName} name={name} groguPosition={groguPosition} message={message} rollDice={rollDice} cookies={cookies} eggs={eggs} frogs={frogs} gameState={gameState}/>}/>
      </Routes>

      <Footer />

    </>
  )
}


export default App;
