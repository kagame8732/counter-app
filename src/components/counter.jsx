import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0
    };
    style = {
       fontSize: 30,
       fontWeight: 'bold',



    }
    render() { 
        return <React.Fragment>
                <span style={this.style} className="btn btn-primary m-4">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                </React.Fragment>;
    }
    formatCount (){
        const {count } = this.state;
        return count === 0 ? "Zero": count;
    }
}
 
export default Counter;