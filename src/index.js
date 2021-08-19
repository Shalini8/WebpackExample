import React from 'react';
import ReactDOM from 'react-dom';
import "../src/index.css"

const HelloWorld = () => {
    return (
        <h1 className='header'>
            Hello Shalini
            <p className='para'>this project is made of webpack</p>
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
