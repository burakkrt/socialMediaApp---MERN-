import * as api from "../api";

export const getPosts = async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    const action = {
      type: "FETCH_ALL",
      payload: data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const res = await api.createPost(post);
    if (res.status === 201) {
      dispatch({ type: "CREATE", payload: res.data });
      return res.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};
