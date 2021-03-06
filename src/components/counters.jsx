import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (id) => {
    const index = this.state.counters.findIndex((counter) => counter.id === id);
    const data = this.state.counters;

    data[index].value = ++data[index].value;

    this.setState((prevState) => ({
      counters: data,
    }));
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleOnDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <h1>
          <strong>Counter App</strong>
        </h1>
        <button onClick={this.handleReset} className="btn btn-primary sm m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleOnDelete}
            onIncrement={this.handleIncrement}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
