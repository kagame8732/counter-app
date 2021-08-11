import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0
    };
     handleIncrement =() => {
         this.setState({count:this.state.count + 1})
    }
    render() {
        return (
        
        <React.Fragment>
            <span className="btn btn-info m-2">{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary sm">Increment</button>  
        </React.Fragment>
        )
    }
    formatCount(){
        return (this.state.count === 0 ? "zero" : this.state.count )
    }
}
 
export default Counter;