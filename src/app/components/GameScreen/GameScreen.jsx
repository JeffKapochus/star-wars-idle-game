import React from "react";
import "./GameScreen.css";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { ModalDisplay } from "../ModalDisplay/ModalDisplay";
import { Battlefield } from "../Battlefield/Battlefield";
import { ItemButton } from "../ItemButton/ItemButton";
import { ScoreDisplay } from "../ScoreDisplay/ScoreDisplay";
import { NumberFormat } from "../NumberFormat/NumberFormat";
const TabPane = Tabs.TabPane;

export class GameScreen extends React.Component {
  instructions = ["This game is meant to be an exercise in the React skills I picked up at a previous job. " +
  "The object of this game is to purchase supplies for the Rebel army so that they might win the war " + 
  "against the Galactic Empire. Start by clicking on the 'Astromech Droid' button once to purchase an " + 
  "Astromech Droid. The droid will then begin earning credits for you each second. You can use those " + 
  "credits to purchase more droids to earn more credits. Much of this project remains indefinitely unfinished."];

  constructor(props) {
    super(props);
    this.state = {
      credits: 15,
      toAdd: 0,
      totalCredits: 15,
      creditsSpent: 0,
      timePlayed: 0,
      averageEarned: 0,
      hideModal: false,
      currentInstruction: 0
    };
    this.buttonPressCallback = this.buttonPressCallback.bind(this);
    this.closeModalCallback = this.closeModalCallback.bind(this);
  }
  componentDidMount() {
    this.credits = setInterval(
      () =>
        this.setState({
          credits: this.state.credits + this.state.toAdd,
          totalCredits: this.state.totalCredits + this.state.toAdd,
          averageEarned: this.state.totalCredits / (this.state.timePlayed + 1),
          timePlayed: this.state.timePlayed + 1
        }),
      1000
    );
  }
  buttonPressCallback(creditsToSubtract, valueToAdd) {
    var newCred = parseInt(this.state.credits) - parseInt(creditsToSubtract);
    var newAdd = parseInt(this.state.toAdd) + parseInt(valueToAdd);
    var newTotalSpent =
      parseInt(this.state.creditsSpent) + parseInt(creditsToSubtract);
    this.setState({
      credits: newCred,
      toAdd: newAdd,
      creditsSpent: newTotalSpent
    });
  }
  closeModalCallback(){
    this.setState({
      hideModal:true
    });
  }
  render() {
    return (
      <div className="gamescreen">
        <ModalDisplay block={true} hide={this.state.hideModal} closeModal={this.closeModalCallback} text={this.instructions[this.state.currentInstruction]}/>
        <Tabs defaultActiveKey="0">
          <TabPane tab="Game" key="0">
            <div className="score-div">
              <ScoreDisplay
                className="creditDiv"
                displayLabel="Galactic Credits"
                credits={this.state.credits}
              />
              <ScoreDisplay
                className="creditPerSecondDiv"
                displayLabel="Credits Per Second"
                credits={this.state.toAdd}
              />
            </div>
            <div className="button-div">
              <ItemButton
                buttonLabel="Astromech Droid"
                cost={15}
                value={1}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Protocol Droid"
                cost={100}
                value={5}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Rebel Trooper"
                cost={500}
                value={10}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Rebel Vanguard"
                cost={800}
                value={20}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Rebel Pilot"
                cost={1500}
                value={50}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="A-Wing"
                cost={3000}
                value={100}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Y-Wing"
                cost={5000}
                value={200}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="X-Wing"
                cost={10000}
                value={500}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Scoundrel"
                cost={20000}
                value={1000}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="General"
                cost={50000}
                value={2000}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Chancellor"
                cost={100000}
                value={5000}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
              <ItemButton
                buttonLabel="Jedi"
                cost={150000}
                value={10000}
                handleClickCallback={this.buttonPressCallback}
                credits={this.state.credits}
              />
            </div>
            <div className="display-div">
              <Battlefield />
            </div>
          </TabPane>
          <TabPane tab="Stats" key="1">
            <div className="stats-div">
              Total Credits Earned:{" "}
              <NumberFormat value={this.state.totalCredits} />
              <br />
              Total Credits Spent:{" "}
              <NumberFormat value={this.state.creditsSpent} />
              <br />
              Total Time Played:{" "}
              <NumberFormat value={this.state.timePlayed} />
              <br />
              Average Credits Earned Per Second:{" "}
              <NumberFormat value={this.state.averageEarned} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
