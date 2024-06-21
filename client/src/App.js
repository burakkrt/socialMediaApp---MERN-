import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { Navbar } from "./components/Navbar";

function App() {
  const disspatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    disspatch(getPosts);
  }, [disspatch, currentId]);

  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "#322C2B", padding: "24px", color: "white" }}
    >
      <Navbar />

      <Grow in style={{ minHeight: "84vh" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={8}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
