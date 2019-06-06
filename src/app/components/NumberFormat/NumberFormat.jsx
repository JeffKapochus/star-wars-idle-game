import React from "react";
import "./NumberFormat.css";

export class NumberFormat extends React.Component {
  abbreviate(input) {
    var inputNum = parseInt(input);
    //TODO: Maybe maybe this handle numbers larger than 999 quintillion.
    if (inputNum >= 1000) {
      var suffixes = [
        "",
        "k",
        "m",
        "b",
        "t",
        "qd",
        "qn",
        "sx",
        "sp",
        "o",
        "n",
        "d",
        "u",
        "dud",
        "trd",
        "qtd",
        "qqd",
        "sxd",
        "spd",
        "od",
        "nd",
        "v",
        "uv"
      ];
      var suffixLoc = Math.floor(Math.log(Math.abs(inputNum)) / Math.log(1000));
      var inputString = inputNum.toString();
      var exp = inputNum.toExponential();
      var expArray = exp.toString().split("+");
      var resultString = "";
      var switcher = parseInt(expArray[1]) % 3;
      switch (switcher) {
        case 0:
          resultString =
            inputString.substring(0, 1) + "." + inputString.substring(1, 3);
          break;
        case 1:
          resultString =
            inputString.substring(0, 2) + "." + inputString.substring(2, 3);
          break;
        case 2:
          resultString = inputString.substring(0, 3);
          break;
        default:
          resultString = "N/A";
      }
      return resultString + suffixes[suffixLoc];
    } else {
      return inputNum.toFixed(2);
    }
  }
  render() {
    return (
      <span>
        {this.props.prefix ? this.props.prefix : ""}
        {this.abbreviate(this.props.value || 0)}
      </span>
    );
  }
}
