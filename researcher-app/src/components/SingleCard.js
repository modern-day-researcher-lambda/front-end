import React from 'react';


const SingleCard = (props) => {
	console.log(props);

    return (
	    <div className={props.complete ? 'card complete' : 'card'} >
        	<p>{props.title}</p>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <p>{props.link}</p>
            <p>{props.completed}</p>
	    </div>
    );
};


export default SingleCard;
