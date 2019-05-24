import React from "react";
import "./ScoreDisplay.css";
import NumberFormat from "react-number-format";

export class ScoreDisplay extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>
          {this.props.displayLabel}:{" "}
          <NumberFormat
            value={this.props.credits}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
          />
        </p>
      </div>
    );
  }
}
