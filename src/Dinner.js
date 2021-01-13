import React from 'react';

function Dinner(props) {
    return (
        <div>
            <h1>Today we are Serving {props.Dishname}</h1>
            <h1>Today Sweet Serving is {props.SweetDishname}</h1>
        </div>
    );
}

export default Dinner;