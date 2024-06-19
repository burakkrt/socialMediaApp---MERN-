import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const disspatch = useDispatch();
  useEffect(() => {
    disspatch(getPosts);
  }, [disspatch]);

  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "#322C2B", padding: "24px", color: "white" }}
    >
      <AppBar
        sx={{
          marginBottom: "24px",
          backgroundColor: "#973131",
          position: "static",
          color: "white",
          padding: "8px 0",
        }}
      >
        <Typography variant="h2" align="center">
          SOSYAL MEDYA MERN APP
        </Typography>
      </AppBar>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={8}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
