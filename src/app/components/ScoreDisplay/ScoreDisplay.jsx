const React = require("react");
export class ScoreDisplay extends React.Component {
  render() {
    return (
      <div class={this.props.className}>
        <p>{this.props.displayLabel}: {(this.props.credits).toFixed(0)}</p>
      </div>
    );
  }
}
