import React from "react";
import "./ModalDisplay.css";

export class ModalDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: true
    };
  }
  render() {
    return (
      <div id="modalBlocker" className={(this.props.block ? "totalBlock" : "") + " " + (this.props.hide ? "hidden" : "")}><div id="dialogueDisplay"><div id="closeButton" onClick={this.props.closeModal}>X</div><p>{this.props.text}</p></div></div>
    );
  }
}
