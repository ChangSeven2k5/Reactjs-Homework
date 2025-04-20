import React from 'react';

function App() {
    return < Greeting name = 'Jonh' />;
}

function Greeting(props) {
    return <h1> Hello, {props.name}!</h1>
}

export default App;