import axios from "axios";

const url = process.env.REACT_APP_API_URL || "";
const postUrl = url + "/post";

export const getPosts = () => axios.get(postUrl);

export const createPost = (newPost) => axios.post(postUrl, newPost);
