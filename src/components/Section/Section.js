import React from 'react';

const section =(props) => {
    return(
        <div className={props.class}>
            <div className='container'>
                <h2 className="display-4 text-light">{props.label}</h2>
            </div>
        </div>
    );
};

export default section;