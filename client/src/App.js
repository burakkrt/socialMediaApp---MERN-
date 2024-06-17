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
    <Container maxWidth="lg">
      <AppBar
        sx={{
          marginBottom: "15px",
          backgroundColor: "#778da9",
          position: "static",
          color: "inherit",
        }}
      >
        <Typography variant="h2" align="center">
          SOSYAL MEDYA MERN APP
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
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
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
