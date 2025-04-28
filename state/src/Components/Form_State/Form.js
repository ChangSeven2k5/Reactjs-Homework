import React, { Component, useState } from 'react';

function Form() {
    //Cách 1
    const [name, setName] = useState([]);

    return(
        <div>
            <h1>{name}</h1>
            <label>Enter your name: </label>
            <input value={name}    onChange={(event) =>(setName(event.target.value))}></input>
        </div>
    )
    //Cách 2
    // const [name, setName] = useState([]);

    // handleChange = (e) => {

    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // return(
    //     <div>
    //         <h1>{name}</h1>
    //         <label>Enter your name: </label>
    //         <input value={name}    onChange={(event) =>(setName(event.target.value))}></input>
    //         <button type='submit'>Submit</button>
    //     </div>
    // )

}

export default Form;