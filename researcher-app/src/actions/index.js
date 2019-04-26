import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_CARDS_START = "FETCH_CARDS_START";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_CARDS_FAILURE";

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



export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:4000/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};


export const getCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS_START });
  axios
    .get("http://localhost:4000/cards", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_CARDS_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_CARDS_FAILURE, payload: err.response });
    });
};
