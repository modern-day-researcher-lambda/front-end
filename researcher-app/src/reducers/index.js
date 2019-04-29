import {

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    FETCH_CARDS_START,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,

    ADD_CARD_START,
    ADD_CARD_SUCCESS,
    ADD_CARD_FAILURE,

/*
    UPDATE_CARDS_START,
    UPDATE_CARDS_SUCCESS,
    UPDATE_CARDS_FAILURE,

    DELETE_CARD_START,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE,

    TOGGLE_CARD_START,
    TOGGLE_CARD_SUCCESS,
    TOGGLE_CARD_FAILURE,

    FETCH_CATEGORY_START,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE,
    
    ADD_CATEGORY_START,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAILURE
*/

} from "../actions";

const initialState = {
  cards: [
    {
        userid: "",
        title: "Your First Card",
        category: "General",
        description: "This is where you will add a description of your resource",
        link: "www.google.com",
        completed: false,
        created: new Date(),
        updated: null
    }
  ],
  isLoggingIn: false,
  loginError: null,
  isRegistering: false,
  registerError: null,
  fetchingData: false,
  addingCard: false,
  updatingCard: false,
  deletingCard: false,
  errorStatusCode: null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loginError: "",
        isLoggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: action.payload.data.message,
        isLoggingIn: false
      };
    }

    case REGISTER_START: {
      return {
        ...state,
        registerError: "",
        isRegistering: true
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        registerError: action.payload,
        isRegistering: false
      };
    }
    
    case FETCH_CARDS_START:
        console.log('fetching cards');
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_CARDS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: "",
        fetchingData: false,
        cards: action.payload
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        errorStatusCode: action.payload.status
      };

    case ADD_CARD_START:
      console.log('Adding card');
      return {
        ...state,
        error: "",
        addingCard: true
      };
    case ADD_CARD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        addingCard: false,
        cards: action.payload
      }
    case ADD_CARD_FAILURE:
      return {
        ...state,
        error: action.payload.status
      }
    default:
      return state;
  }
};

export default reducer;

