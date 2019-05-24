import React from "react";
import "./App.css";
import { GameScreen } from "./components/GameScreen/GameScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="siteTitle">Star Wars Idle Game</h1>
      </header>
      <div className="App-body">
        <GameScreen />
      </div>
      <footer className="App-footer">© Jeff Kapochus 2019</footer>
    </div>
  );
}

export default App;
