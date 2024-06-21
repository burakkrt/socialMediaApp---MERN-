import { AppBar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      sx={{
        marginBottom: "24px",
        backgroundColor: "#973131",
        position: "static",
        color: "#F7F9F2",
        borderRadius: "10px",
        padding: "12px 0",
      }}
    >
      <Typography variant="h4" align="center" fontWeight={600}>
        SOSYAL MEDYA MERN APP
      </Typography>
    </AppBar>
  );
};
