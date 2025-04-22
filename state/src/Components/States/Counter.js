import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    };
    decrease = () => {
        this.setState({count: this.state.count - 1});
    };
    render() {
        return (
            <div> 
                <h1>Giá trị: {this.state.count}</h1>
                <button onClick={this.increase} style={{padding:'10px', backgroundColor:'red'}}>Tăng</button>
                <button onClick={this.decrease} style={{padding:'10px'}}>Giảm</button>
            </div>
        );
    }
}

export default Counter;