import React from 'react';

const projectCard = (props) => {
    return (

        <div className='row card-project'>
            <div className="col-md-7 ">
                <img className="img-fluid rounded mb-2 mb-md-0 " src={props.image} alt="" onClick={props.clicked} />
            </div>
            <div className="col-md-5">
                <h2 className="text-purple card-project-title">{props.name}</h2>
                <p className="text-purple">{props.description}</p>
            </div>
        </div>
      
    )
}

export default projectCard;