import React, { Component } from 'react';
import { getData } from './data';
class State1 extends Component {
    constructor(props) {
        const arr = getData();
        super(props);
        this.state = {arr}
    }

    render() {
        return (
            <div>
              <div id='container' style={{display:'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {this.state.arr.map(key => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={key.image} className="card-img-top" alt={key.name} />
                        <div className="card-body">
                        <h5 className="card-title">{key.name}</h5>
                        <p className="card-text">{key.loai}</p>
                        </div>
                    </div>
                ))}
              </div>  
            </div>
        );
    }
}

export default State1;
{/* <div>
                        <h1>{key.name}</h1>
                        <img src={key.image} style={{with:'200px', height:'200px'}}></img>
                        <p>{key.loai}</p>
                    </div> */}