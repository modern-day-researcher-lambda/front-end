import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../actions'
import Tab from '../components/Tab'
 


const mapStateToProps = state => ({
    category: state.category,
    cards: state.cards,
    user_id: state.user_id
});


class Tabs extends React.Component {

    constructor(props){
        super(props) 
        this.state = {
            selected: 'all',
            tabs: ['all'],
            cards: []
        }
    }

    componentDidMount() {
        if (this.props.user_id) this.props.getCards(this.props.user_id);
     }

    filterCards = () => {
        let filter = this.props.cards.filter(cards => this.state.selected === cards.tab)

        if (this.state.selected === 'all') {
            return this.state.cards;
        } else {
            return filter;
        }
    }


    render() {
        return (
            <div>
                {this.state.tabs.map(tab => (
                    <Tab tab={ tab } />
                ))}
            </div>
        );
    }
}


export default connect(mapStateToProps, { getCards })(Tabs);