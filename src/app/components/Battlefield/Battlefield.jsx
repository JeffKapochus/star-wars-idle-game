import React from "react";
import "./Battlefield.css";

export class Battlefield extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="battle-div">
        <img
          src="images/desert.png"
          alt="Battlefield"
          className="battlefield-img"
        />
      </div>
    );
  }
}
