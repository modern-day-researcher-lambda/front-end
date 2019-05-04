import React from 'react';
import { connect } from 'react-redux';


import { updateCard } from '../actions/';



const mapStateToProps = state => ({
    id: state.id,
    cards: state.cards
});



class UpdateCardForm extends React.Component {

    constructor(props) {
        super(props);

        this.cards = props.cards;
        this.id = Number(props.match.params.id);

        this.state = {
            updatedCard: {
                title: '',
                category: '',
                description: '',
                link: '',
                id: null,
                user_id: null,
                created: null,
                updated: null,
                completed: false
            }
        };

        console.log('inside constructor');
        console.log(this.state);
    }

    componentDidMount = () => {
        const oldCard = this.cards.find(card => card.id === this.id);
        if (oldCard) this.setState({updatedCard: oldCard})
        console.log('inside componentDidMount');
        console.log(this.cards);
    };


    handleChange = e => {
        this.setState({
            updatedCard: {
                ...this.state.updatedCard,
                [e.target.name]: e.target.value
            }
        });

        console.log('inside handleChange');
        console.log(this.state);
    };


    handleUpdateCard = (e) => {
        e.preventDefault();

        console.log('inside handleUpdateCard');
        console.log(this.state.updatedCard);
    
        this.props.updateCard(this.state.updatedCard, this.props.history);
      }


    render() {

        return (
            <div className='card-form'>
                <form onSubmit={this.handleUpdateCard}>
                <input
                    onChange={this.handleChange}
                    placeholder="Title"
                    value={this.state.updatedCard.title}
                    name="title"
                    autoFocus={true}
                />
                <input
                    onChange={this.handleChange}
                    placeholder="Category"
                    value={this.state.updatedCard.category}
                    name="category"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="description"
                    value={this.state.updatedCard.description}
                    name="description"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="link"
                    value={this.state.updatedCard.link}
                    name="link"
                />
                <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps, { updateCard })(UpdateCardForm);
