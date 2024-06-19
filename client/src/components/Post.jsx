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

export default function Post({ post }) {
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
          paddingTop: "26.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
        image={post.selectedFile}
        title={post.title}
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
          onClick={() => {}}
        >
          <MoreHoriz />
        </Button>
      </div>
      <div>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "12px 18px",
          }}
          variant="p"
          color="darkgray"
        >
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
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
        <Typography variant="p" color="darkgray">
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
          onClick={() => {}}
        >
          <ThumbUp fontSize="small" />
          {post.likeCount}
        </Button>
        <Button size="small" color="error" onClick={() => {}}>
          <Delete fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
}
