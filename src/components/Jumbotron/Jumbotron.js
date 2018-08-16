import React from 'react';

const jumbotron =(props) => {
    return (
        <div className={props.clsName}>
            {props.children}
        </div>
    )
}

export default jumbotron;