import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { ThumbUp, Delete, MoreHoriz } from "@mui/icons-material";

import moment from "moment";
import "moment/locale/tr";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../actions/posts";

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();

  const hanleSelect = () => {
    setCurrentId(post._id);
  };

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    alert("Post başarılı bir şekilde silindi.");
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
    alert("Post beğenildi.");
  };

  const cardOptions = {
    title: post.title,
  };

  if (post.selectedFile) {
    cardOptions.image = post.selectedFile;
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
        backgroundColor: "#dad7cd",
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "46.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
        {...cardOptions}
      />
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
        }}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div>
        <Button
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "white",
          }}
          size="large"
          onClick={hanleSelect}
        >
          <MoreHoriz />
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "6px",
          margin: "12px 18px",
        }}
      >
        {post.tags.map((tag, index) => (
          <Typography
            variant="span"
            color="#5A72A0"
            fontWeight="semibold"
            key={index}
          >
            #{tag.trim()}
          </Typography>
        ))}
      </div>
      <Typography
        sx={{ padding: "0px 18px" }}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <CardContent sx={{ padding: "12px 18px" }}>
        <Typography variant="p" color="#0C1844">
          {post.message}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          padding: "0 8px 8px 8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          color="primary"
          sx={{ gap: "12px" }}
          onClick={handleLike}
        >
          <ThumbUp fontSize="small" />
          {post.likeCount}
        </Button>
        <Button size="small" color="error" onClick={handleDelete}>
          <Delete fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}
