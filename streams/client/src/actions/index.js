import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = (formValues) =>  async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({type: CREATE_STREAM, payload: response.data});
  // Do some programmatic navigation to get the user back to the root route
  history.push('/'); // .push is stands for how to navigate it is
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = (id) => async dispatch => {
  const response = await  streams.get(`/streams/${id}`);

  dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({type: EDIT_STREAM, payload: response.data});
  history.push('/'); // Bizi formu onaylar onaylamaz => '/' => Anasayfaya yönlendiriyor.
};

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};


// Object-based approach
// const newState = { ...state };
// newState[action.payload.id] = action.payload;
// return newState;

// Same as upper one
// MEANING OF BOTTOM => return { newState, [key]: value }
// ADD [key]: value to newState
// We take key from action.payload's ID
// Code sample is:
// return { ...state, [action.payload.id]: action.payload };


const streamReducer = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload}
    default:
      return state;
  }
};