import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    const {count} = props;

    this.state = {
      count: count,
    };
  }

  handleUp = () => {
    //   this.setState({
    //     count: this.state.count+1
    //   });  

    this.setState(prevState => ({
        count: prevState.count + 1
    }));
  };

  handleDown = () => {
    this.setState(prevState => ({
        count: prevState.count > 0 ? prevState.count - 1: prevState.count
    }));
  };

  render() {
    return (
      <>
        <div style={{ margin: "3%" }}>
          <h1>Count: {this.state.count}</h1>
          <button type={"button"} onClick={this.handleDown}>
            -
          </button>
          <button type={"button"} onClick={this.handleUp}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
