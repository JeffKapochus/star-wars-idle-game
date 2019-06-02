import React from "react";
import "./App.css";
import { GameScreen } from "./components/GameScreen/GameScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="siteTitle">Star Wars Idle Game</h1>
        <p><a href="https://github.com/JeffKapochus/star-wars-idle-game">View Source on Github</a> or <a href="../">Back to This Guy Writes Code</a></p>
      </header>
      <div className="App-body">
        <GameScreen />
      </div>
      <footer className="App-footer">© Jeff Kapochus 2019-{new Date().getFullYear()}<br/> Version 0.0.1a</footer>
    </div>
  );
}

export default App;
