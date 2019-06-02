import React from "react";
import "./ScoreDisplay.css";
import { NumberFormat } from "../NumberFormat/NumberFormat";

export class ScoreDisplay extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>
          {this.props.displayLabel}:{" "} <NumberFormat value={this.props.credits} />
        </p>
      </div>
    );
  }
}
