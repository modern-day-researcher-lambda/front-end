import React from 'react';


const SingleCard = (props) => {
	console.log('SingleCard props:', props);

    return (
	    <div className={props.complete ? 'card complete' : 'card'} >
        	<p>{props.card.title}</p>
            <p>{props.card.category}</p>
            <p>{props.card.description}</p>
            <p>{props.card.link}</p>
            <p>{props.card.completed}</p>
	    </div>
    );
};


export default SingleCard;
