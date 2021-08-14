import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
        <div>
        <span className={`btn btn-${this.props.value === 0? 'warning' :'info'} m-2`}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.id)}
          className="btn btn-secondary sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    return this.props.value === 0 ? "zero" : this.props.value;
  }
}
export default Counter;
