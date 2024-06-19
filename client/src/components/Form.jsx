import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const Form = () => {
  const initialFormValues = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };
  const [postData, setPostData] = useState(initialFormValues);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(createPost(postData));
    if (data) {
      setPostData(initialFormValues);
      alert("Post eklendi.");
    } else {
      alert("Post oluşturulamadı.");
    }
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#F7F9F2",
        padding: "10px",
        borderRadius: "4px",
        position: "sticky",
        top: "24px",
      }}
    >
      <form
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography sx={{ marginBottom: "10px" }} variant="h6">
          POST EKLE
        </Typography>
        <TextField
          sx={{ margin: "5px" }}
          name="creator"
          variant="outlined"
          label="Oluşturan"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          sx={{ margin: "5px" }}
          name="title"
          variant="outlined"
          label="Başlık"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{ margin: "5px" }}
          name="message"
          variant="outlined"
          label="Mesaj"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          sx={{ margin: "5px" }}
          name="tags"
          variant="outlined"
          label="Etiket (virgül ile ayırınız)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div style={{ width: "97%", margin: "10px auto" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          sx={{ marginBottom: "10px" }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Ekle
        </Button>
        <Button
          sx={{ marginBottom: "10px" }}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={() => setPostData(initialFormValues)}
        >
          Temizle
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
