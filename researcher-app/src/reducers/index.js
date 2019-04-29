import {
    RESET_ERROR_MESSAGES,

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
*/

} from "../actions";

const initialState = {
  cards: [],
  user: '',
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
    case RESET_ERROR_MESSAGES: {
      return {
        ...state,
        loginError: '',
        isLoggingIn: false,
        registerError: '',
        isRegistering: false,
        errorStatusCode: '',
        fetchingData: false,
        addingCard: false,
        updatingCard: false,
        deletingCard: false
      };
    }

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
        user: action.payload,
        isLoggingIn: false
      };
    }
    case LOGIN_FAILURE: {
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

