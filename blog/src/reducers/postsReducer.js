// import axios from "axios";

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }

  // export default (state = [], action) => {
  //   switch (action.type) {
  //     case 'FETCH_POSTS':
  //       return action.payload;
  //     case 'ADD_POST':
  //       return {...state, action};
  //     default:
  //       return state;
  //   }
  // }

  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  //
  // return state;

  // BAD EXAMPLES!!
  // return document.querySelector('input');
  // return axios.get('/posts');

  // GOOD
  // return state + action;
};