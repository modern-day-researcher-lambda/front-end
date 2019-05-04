import React from 'react';
import { connect } from 'react-redux';

import { getCards, updateCategory } from '../actions/';
import SingleCard from './SingleCard';
import CardsWrapper from '../styled-components/CardsWrapper';


const mapStateToProps = state => ({
	cards: state.cards,
    categories: state.categories,
    user_id: state.user_id,
    selected_cat: state.selected_cat
});


class Cards extends React.Component {

    componentDidMount() {
       if (this.props.user_id) this.props.getCards(this.props.user_id);
    };

    handleCategoryClick = (e, index) => {
        e.preventDefault();

        let new_cat = '';
        if (index >= 0) new_cat = this.props.categories[index];
        this.props.updateCategory(new_cat);
    };


    render() {

        return (
            <CardsWrapper>
                <div className='card-container'>
                    <div className='categories'>
                        <p>Categories</p>
                        <button onClick={(e) => this.handleCategoryClick(e, -1)}
                         className={this.props.selected_cat === '' ? 'selected-cat' : 'cat'}>All</button>
                        {this.props.categories.map((cat, index) => (
                            <button className={cat === this.props.selected_cat ? 'selected-cat' : 'cat'}
                             onClick={(e) => this.handleCategoryClick(e, index)}
                             key={index} >{cat}</button>
                        ))}              
                    </div>
                    <div className='cards'>
                        {this.props.cards.filter(card => (card.category === this.props.selected_cat) ||
                                                         (this.props.selected_cat === '') )
                             .map(card => (
                            <SingleCard key={card.id} history={this.props.history} card={card} />
                        ))}
                    </div>
                </div>
            </CardsWrapper>
        );
    }
}


export default connect(mapStateToProps, { getCards, updateCategory })(Cards);

