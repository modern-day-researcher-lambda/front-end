import {
    RESET_ERROR_MESSAGES,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,


    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    FETCH_CARDS_START,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,

    ADD_CARD_START,
    ADD_CARD_SUCCESS,
    ADD_CARD_FAILURE,

    UPDATE_CARD_START,
    UPDATE_CARD_SUCCESS,
    UPDATE_CARD_FAILURE,

    DELETE_CARD_START,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_FAILURE,

} from "../actions";

const initialState = {
  cards: [],
  user: '',
  user_id: null,
  isLoggingIn: false,
  loginError: null,
  isRegistering: false,
  registerError: null,
  fetchingData: false,
  addingCard: false,
  updatingCard: false,
  deletingCard: false,
  errorMessage: null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ERROR_MESSAGES: {
      return {
        ...state,
        loginError: '',
        isLoggingIn: false,
        isLoggingOut: false,
        registerError: '',
        isRegistering: false,
        errorMessage: '',
        fetchingCards: false,
        addingCard: false,
        updatingCard: false,
        deletingCard: false,
        loggedIn: false
      };
    }

    case LOGIN_START: {
      return {
        ...state,
        loginError: "",
        isLoggingIn: true,
        loggedIn: false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.username,
        user_id: action.payload.id,
        isLoggingIn: false,
        loggedIn: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: action.payload,
        loggedIn: false,
        isLoggingIn: false
      };
    }
    case LOGOUT_START: {
      return {
        ...state,
        loginError: "",
        isLoggingOut: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        user_id: action.payload,
        loggedIn: false,
        isLoggingOut: false
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        loginError: action.payload,
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
        errorMessage: "",
        fetchingCards: true
      };
    case FETCH_CARDS_SUCCESS:
      console.log('reducer fetch action payload:', action.payload);
      return {
        ...state,
        errorMessage: "",
        fetchingCards: false,
        cards: action.payload
      };
    case FETCH_CARDS_FAILURE:
      return {
        ...state,
        fetchingCards: false,
        errorMessage: action.payload
      };

    case ADD_CARD_START:
      return {
        ...state,
        errorMessage: "",
        addingCard: true
      };
    case ADD_CARD_SUCCESS:
      console.log('reducer ADD_CARD_SUCCESS payload:', action.payload);
      return {
        ...state,
        errorMessage: "",
        addingCard: false,
        cards: action.payload
      }
    case ADD_CARD_FAILURE:
      console.log('reducer ADD_CARD_FAILURE payload:', action.payload);
      return {
        ...state,
        addingCard: false,
        errorMessage: action.payload
      }

    case DELETE_CARD_START:
      return {
        ...state,
        errorMessage: "",
        deletingCard: true
      };
    case DELETE_CARD_SUCCESS:
      console.log('reducer DELETE_CARD_SUCCESS payload:', action.payload);
      return {
        ...state,
        errorMessage: "",
        deletingCard: false,
        cards: state.cards.filter(card => card.id !== action.payload)
      }
    case DELETE_CARD_FAILURE:
      console.log('reducer DELETE_CARD_FAILURE payload:', action.payload);
      return {
        ...state,
        deletingCard: false,
        errorMessage: action.payload
      }

      case UPDATE_CARD_START:
      return {
        ...state,
        errorMessage: "",
        updatingCard: true
      };
    case UPDATE_CARD_SUCCESS:
      console.log('reducer UPDATE_CARD_SUCCESS payload:', action.payload);
      return {
        ...state,
        errorMessage: "",
        updatingCard: false,
        cards: state.cards.map(card => card.id === action.payload.id ? action.payload : card)
      }
    case UPDATE_CARD_FAILURE:
      console.log('reducer UPDATE_CARD_FAILURE payload:', action.payload);
      return {
        ...state,
        updatingCard: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
