import React from "react";
import "./NumberFormat.css";

export class NumberFormat extends React.Component {
  abbreviate(input){
    //TODO: Maybe maybe this handle numbers larger than 999 quintillion.
    if(input < 1000000000000000000000){
      var suffixes = ["","k","m","b","t","qd","qn","sx","sp","o","n","d","u","dud","trd","qtd","qqd","sxd","spd","od","nd","v","uv"];
      var expString = input.toString();
      var suffixLoc = Math.floor(Math.log(Math.abs(input))/Math.log(1000));
      if(expString.length > 3){
        var exp = input.toExponential();
        var expArray = exp.toString().split('+');
        var resultString = "";
        var switcher = parseInt(expArray[1]) % 3;
        switch(switcher){
          case 0:
              resultString = input.toString().substring(0,1) + "." + input.toString().substring(1,3);
              break;
          case 1:
            resultString = input.toString().substring(0,2) + "." + input.toString().substring(2,3);
            break;
          case 2:
              resultString = input.toString().substring(0,3);
              break;
          default:
            resultString = "N/A";
        }
        return resultString + suffixes[suffixLoc];
      }
      else{
        return input;
      }
    }
  }
  render() {
    return (
      <span>{this.props.prefix ? this.props.prefix : ""}{this.abbreviate(this.props.value) || 0}</span>
    );
  }
}
