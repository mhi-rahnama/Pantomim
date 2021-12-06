import React, { Component } from "react";
// import { productContext } from "./Context";

class Timer extends Component {
  //   static contextType = productContext;
  //   componentDidMount() {
  //     const number = this.context;
  //   }
  constructor(props) {
    super(props);
    this.state = { seconds: 10, min: 2 };
  }
  onStart = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.min > 0) {
      this.setState({ min: this.state.min - 1 });
      this.setState({ seconds: (this.state.seconds = 59) });
      this.setState({ seconds: this.state.seconds - 1 });
    }
  };

  timer = () => {
    this.f = setInterval(this.onStart, 1000);
  };
  onPause = () => {
    clearInterval(this.f);
  };

  render() {
    return (
      <div>
        <h1>
          {" "}
          {this.state.min < 10 ? "0" + this.state.min : this.state.min}:
          {this.state.seconds < 10
            ? "0" + this.state.seconds
            : this.state.seconds}
        </h1>
        <button
          style={{ backgroundColor: "#00C733", width: 120, height: 105 }}
          onClick={this.timer}
        >
          Start
        </button>
        <button
          style={{ backgroundColor: "#FF3600", width: 120, height: 105 }}
          onClick={this.onPause}
        >
          End
        </button>
      </div>
    );
  }
}
export default Timer;
