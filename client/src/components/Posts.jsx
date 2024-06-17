import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => {
    return state.postsReducers;
  });

  return <div>Posts</div>;
};

export default Posts;
