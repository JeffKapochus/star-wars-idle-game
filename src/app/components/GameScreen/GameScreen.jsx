import './GameScreen.css';
import {ScoreDisplay} from "../ScoreDisplay/ScoreDisplay";
import {ItemButton} from "../ItemButton/ItemButton";

const React = require("react");

export class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        credits: 15,
        toAdd: 0
    };
    this.buttonPressCallback = this.buttonPressCallback.bind(this);
  }
  componentDidMount() {
    this.credits = setInterval(
      () =>
        this.setState({
          credits: this.state.credits + (this.state.toAdd)
        }),
      1000
    );
  }
  buttonPressCallback(toSubtract, toAdd){
    var newCred = this.state.credits - toSubtract;
    var newAdd = this.state.toAdd + toAdd;
    this.setState({
      credits: newCred,
      toAdd: newAdd
    });
  }
  render() {
    return (
      <div class="gamescreen">
        <div class="score-div">
          <ScoreDisplay className="creditDiv" displayLabel="Galactic Credits" credits={this.state.credits}/>
          <ScoreDisplay className="creditPerSecondDiv" displayLabel="Credits Per Second" credits={this.state.toAdd}/>
        </div>
        <div class="button-div">
          <ItemButton buttonLabel="Astromech Droid" cost={15} value={1} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Protocol Droid" cost={100} value={5} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Rebel Trooper" cost={500} value={10} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Rebel Vanguard" cost={800} value={20} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Rebel Pilot" cost={1500} value={50} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="A-Wing" cost={3000} value={100} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Y-Wing" cost={5000} value={200} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="X-Wing" cost={10000} value={500} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Scoundrel" cost={20000} value={1000} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="General" cost={50000} value={2000} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Chancellor" cost={100000} value={5000} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
          <ItemButton buttonLabel="Jedi" cost={150000} value={10000} handleClickCallback={this.buttonPressCallback} credits={this.state.credits}/>
        </div>
        <div class="display-div">
          <img src=""/>
        </div>
      </div>
    );
  }
}
