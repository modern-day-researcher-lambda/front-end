import axios from "axios";
//import history from "../components/history"

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_CARDS_START = "FETCH_CARDS_START";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";

export const ADD_CARD_START = "ADD_CARD_START";
export const ADD_CARD_SUCCESS = "ADD_CARD_SUCCESS";
export const ADD_CARD_FAILURE = "ADD_CARD_FAILURE";

export const UPDATE_CARDS_START = "UPDATE_CARDS_START";
export const UPDATE_CARDS_SUCCESS = "UPDATE_CARDS_SUCCESS";
export const UPDATE_CARDS_FAILURE = "UPDATE_CARDS_FAILURE";

export const DELETE_CARD_START = "DELETE_CARD_START";
export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_FAILURE = "DELETE_CARD_FAILURE";

export const TOGGLE_CARD_START = "TOGGLE_CARD_START";
export const TOGGLE_CARD_SUCCESS = "TOGGLE_CARD_SUCCESS";
export const TOGGLE_CARD_FAILURE = "TOGGLE_CARD_FAILURE";

export const FETCH_CATEGORY_START = "FETCH_CATEGORY_START";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILURE = "FETCH_CATEGORY_FAILURE";

export const ADD_CATEGORY_START = "ADD_CATEGORY_START";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

export const RESET_ERROR_MESSAGES = 'RESET_ERROR_MESSAGES';



export const resetErrors = () => dispatch => {
  dispatch({ type: RESET_ERROR_MESSAGES});
}


export const login = (creds, history) => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/users/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: creds.username });
      history.push('/cards');
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};


export const register = (creds, history) => dispatch => {
  dispatch({ type: REGISTER_START });

  return axios
    .post("http://localhost:5000/users/register", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_SUCCESS });
      history.push("/login")
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message });
    });
};



export const getCards = (user) => dispatch => {
  dispatch({ type: FETCH_CARDS_START });
  axios
    .get(`http://localhost:5000/cards/users/${user}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log('action getCards res:', res);
      dispatch({
        type: FETCH_CARDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('action getCards err.response:', err.response);
      /*
      if (err.response.status === 401) {
        localStorage.removeItem("token");
      }
      */
      dispatch({ type: FETCH_CARDS_FAILURE, payload: err.response.data.message });
    });
};


export const addCard = (card, user) => dispatch => {
  console.log('entering addCard');
  dispatch({ type: ADD_CARD_START });
  axios
    .post(`http://localhost:5000/cards/users/${user}`, card, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log('action addCard res:', res);
      dispatch({
        type: ADD_CARD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('action addCard err:', err);
      /*
      if (err.response.status === 401) {
        localStorage.removeItem("token");
      }
      */
      dispatch({ type: ADD_CARD_FAILURE, payload: err });
    });
};
