import { ACTION_TYPES as ACTION } from "../constants/actionTypes";

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case ACTION.FETCH_ALL:
      return action.payload;
    case ACTION.CREATE:
      return [action.payload, ...posts];
    case ACTION.UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case ACTION.DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case ACTION.LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

export default postsReducer;
