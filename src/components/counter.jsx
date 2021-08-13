import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: this.props.value
    };
    handleIncrement = (product) => {
         console.log(product)
         this.setState({count:this.state.count + 1})
     }
    doHandleIncrement = () => {
        this.handleIncrement({id: 1 })
    }
    render() {
        return ( 
            <div>
            <span className="btn btn-info m-2">{this.formatCount()}</span>
                <button onClick=
                    {this.doHandleIncrement} className="btn btn-secondary sm">Increment</button>
                <button onClick=
                {() => this.props.onDelete(this.props.id)} className="btn btn-danger sm m-2">Delete</button>
        </div>
        )
    }
    formatCount(){
        return (this.state.count === 0 ? "zero" : this.state.count )
    }
}
export default Counter;