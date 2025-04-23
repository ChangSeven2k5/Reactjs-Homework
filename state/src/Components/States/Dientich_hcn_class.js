import React, { Component } from 'react';

class Dientich_hcn_class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            width:0,
            area: 0
        }
    }

    handleLengthChange = (e) => {
        this.setState({length: Number(e.target.value)});
    }

    handleWidthChange = (e) => {
        this.setState({width: Number(e.target.value)});
    }

    calculateArea = () => {
        const {length, width} = this.state;
        this.setState({area: length*width});
    }
    render() {
        return (
            <div>
                 <div style={{padding: '20px'}}>
            <h2>Calculate Area </h2>
            <div>
                <label>Length:</label>
                <input 
                    type="number"
                    value={this.state.length}
                    onChange={this.handleLengthChange}
                ></input>
            </div>
            <div>
                <label>Width:</label>
                <input 
                    type="number"
                    value={this.state.width}
                    onChange={this.handleWidthChange}
                ></input>
            </div>
            <button onClick={this.calculateArea}>CalculateArea</button>
            <label> Area: {this.state.area}</label>
           
        </div>
            </div>
        );
    }
}

export default Dientich_hcn_class;