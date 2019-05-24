import React from 'react';
import './ScoreDisplay.css';

export class ScoreDisplay extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.displayLabel}: {(this.props.credits).toFixed(0)}</p>
      </div>
    );
  }
}
