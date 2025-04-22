import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Seven suôi mak lơi',
            age: 17
        }
    }
    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <h1>My age is {this.state.age}</h1>
            </div>
        );
    }
}

export default Member;