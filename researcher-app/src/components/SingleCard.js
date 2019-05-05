import React from 'react';

import { connect } from 'react-redux';
import { deleteCard } from '../actions';
import SingleCardWrapper from '../styled-components/SingleCardWrapper';


const SingleCard = (props) => {

	const handleDeleteCard = (e) => {
		e.preventDefault();

        const { id } = props.card;
        props.deleteCard(id);
    };

    const handleUpdateCard = (e) => {
        e.preventDefault();

        const { id } = props.card;
        props.history.push(`/cards/${id}`);
    };


    return (
	    <SingleCardWrapper>
        	<p className='title'>{props.card.title}</p>
            <p className='category'>Category: {props.card.category}</p>
            <p className='complete'>Complete? <span>{props.card.completed ? 'Yes' : 'No'}</span></p>
            <p className='link'>Link: <a href={'https://' + props.card.link}>{props.card.link}</a></p>
            <p className='desc-label'>Description:</p>
            <textarea className='desc-text' value={props.card.description} readOnly={true} />
            <p className='time'>Created: {props.card.created && props.card.created.toString()}</p>
            <p className='time'>Last updated: {props.card.updated && props.card.updated.toString()}</p>
            <form>
            	<button className='delete' onClick={handleDeleteCard}>Delete</button>
                <button className='update' onClick={handleUpdateCard}>Update</button>
            </form>
	    </SingleCardWrapper>
    );
};



export default connect(
  null,
  { deleteCard }
)(SingleCard);
