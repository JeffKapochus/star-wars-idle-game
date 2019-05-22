const React = require("react");
export class ScoreDisplay extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.displayLabel}: {(this.props.credits).toFixed(0)}</h3>
      </div>
    );
  }
}
