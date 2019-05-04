import React from 'react';
import { connect } from 'react-redux';

import { updateCard } from '../actions/';

import UpdateCardFormWrapper from '../styled-components/UpdateCardFormWrapper';


const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    cards: state.cards
});



class UpdateCardForm extends React.Component {

    constructor(props) {
        super(props);

        this.loggedIn = props.loggedIn;
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
    }

    componentDidMount = () => {
        const oldCard = this.cards.find(card => card.id === this.id);
        if (oldCard) this.setState({updatedCard: oldCard})
    };


    handleCheck = e => {
        this.setState({
            updatedCard: {
                ...this.state.updatedCard,
                [e.target.name]: e.target.checked
            }
        });
    };


    handleChange = e => {
        this.setState({
            updatedCard: {
                ...this.state.updatedCard,
                [e.target.name]: e.target.value
            }
        });

    };

    handleCancel = () => {
        const oldCard = this.cards.find(card => card.id === this.id);
        if (oldCard) this.setState({updatedCard: oldCard})
    }


    handleUpdateCard = (e) => {
        e.preventDefault();

        console.log('inside handleUpdateCard');
        console.log(this.state.updatedCard);

        const cdate = new Date();

        this.props.updateCard({...this.state.updatedCard, updated: cdate}, this.props.history);
      }


    render() {

        if (this.props.loggedIn) {
            return (
                <UpdateCardFormWrapper>
                    <form onSubmit={this.handleUpdateCard} >
                        <div>
                            <label name='title'>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.updatedCard.title}
                                onChange={this.handleChange}
                                autoFocus={true}
                            />
                        </div>

                        <div>
                            <label name='category'>Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={this.state.updatedCard.category}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='checkbox'>
                            <label name='completed'>Completed?</label>
                            <input
                                type="checkbox"
                                name="completed"
                                value={this.state.updatedCard.completed}
                                onChange={this.handleCheck}
                            />
                        </div>

                        <div>
                            <label name='link'>Link:</label>
                            <input
                                type="text"
                                name="link"
                                value={this.state.updatedCard.link}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <label name='description'>Description:</label>
                            <textarea
                                name="description"
                                onChange={this.handleChange}
                                value={this.state.updatedCard.description}
                            />
                        </div>

                        <button type="submit">Update</button>
                        <button onClick={ this.handleCancel } >Cancel</button>
                    </form>
                </UpdateCardFormWrapper>
            );
        }
        else {
            this.props.history.push('/')
            return (
                <div> </div>
            )}
    }
}


export default connect(mapStateToProps, { updateCard })(UpdateCardForm);
