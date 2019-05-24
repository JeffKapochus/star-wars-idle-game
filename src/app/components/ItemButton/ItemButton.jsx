import React from 'react';
import './ItemButton.css';

export class ItemButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      value: 0,
      owned: 0,
      perSecond: 0
    }
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.checkDisabled = this.checkDisabled.bind(this);
  }
  componentDidMount(){
    this.setState({
      cost: this.props.cost,
      value: this.props.value
    });
  }

  checkDisabled(){
    if((this.props.credits - this.state.cost) < 0){
      return true;
    }
    return false;
  }

  handleButtonPress(){
    var newVal = this.state.value;
    if(this.state.owned % 25 === 24){
      newVal = this.state.value * 2;
      this.props.handleClickCallback(this.state.cost, (newVal + (this.state.value * this.state.owned)));
    }
    else{
      this.props.handleClickCallback(this.state.cost, this.state.value);
    }
    var newOwned = this.state.owned + 1;
    this.setState({cost: (this.props.cost * Math.pow(1.07, newOwned)).toFixed(0), owned: newOwned, value: newVal, perSecond: newVal * newOwned});
  }

  render() {
    return (
      <button
          type="primary"
          className="itemButton"
          onClick={this.handleButtonPress}
          disabled={this.checkDisabled()}
      >
        <strong>{this.props.buttonLabel}</strong><br/>
        <small>Value: {this.state.value}<br />
        Cost: {this.state.cost}<br />
        Owned: {this.state.owned}<br />
        Credits Per Second: {this.state.perSecond}</small>
      </button>
    );
  }
}
