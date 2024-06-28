import axios from "axios";

const url = process.env.REACT_APP_API_URL || "";
const postUrl = url + "/post";

export const getPosts = () => axios.get(postUrl);

export const createPost = (newPost) => axios.post(postUrl, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${postUrl}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${postUrl}/${id}`);

export const likePost = (id) => axios.patch(`${postUrl}/${id}/likePost`);
