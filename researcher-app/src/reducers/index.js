import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    FETCH_CARDS_START,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAILURE,

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

} from "../actions";


const initialState = {
   cards: [
    {
        userid: "",
        id: 0,
        title: "",
        category: "",
        description: "",
        link: "",
        completed: false,
        created: new Date(),
        updated: null
    }
]}


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
        loginError: "failed login",
        isLoggingIn: false
      };
    }
    case FETCH_CARDS_START:
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
    default:
      return state;
  }
};

export default reducer;

