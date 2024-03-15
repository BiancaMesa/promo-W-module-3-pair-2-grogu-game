import Header from "../components/Header";
import Board from "../components/Board";
import { useState } from 'react';
import '../scss/App.scss'; 

function App() {
const [diceValue, setDiceValue] = useState(null); 
const [groguPosition, setGroguPosition] = useState(0);
// const [remainingGoods, setRemainingGoods] = useState({cookies: 3, eggs: 3, frogs: 3}); 
const [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]); 
const [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]); 
const [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]); 
const [gameState, setGameState] = useState("in progress");

function handleClick () {
  const randomNumber = Math.floor(Math.random() * 4)+1;
  setDiceValue(randomNumber);
  console.log(randomNumber); 

  if(diceValue === 4) {
    const newPosition = groguPosition +1; 
    setGroguPosition(newPosition); 
  }
}

  return (
    <>
      <Header/>
      <main className="page">
        <h3 className="subtitle">Introduce tu nombre para jugar</h3>
        <input className="inputName" type="text" name="" id="" placeholder="Escribe tu nombre"/>

        <Board/>

        <section>
          <button onClick={handleClick} className="dice">Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>

    </>
  )
}

export default App;
