import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/joy/Typography";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();

  const UserInfo = ({ username, onAction }) => {
    return (
      <Stack direction="row" spacing={2}>
        <Typography variant="body1">{username}</Typography>
        <Button variant="outlined" onClick={onAction}>
          Logout
        </Button>
      </Stack>
    );
  };

  const LoginOptions = () => {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Stack>
    );
  };

  return (
    <Box>
      <Paper>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "0.5rem 1rem" }}
        >
          {/* App Site Logo */}
          <Avatar
            src="vite.svg"
            alt="logo"
            sx={{ width: "3rem", height: "3rem" }}
          />

          {/* Login Buttons */}
          {props?.isLoggedIn ? (
            <UserInfo
              username={props?.user?.username}
              onAction={() => {
                localStorage.setItem("username", "");
                localStorage.setItem("email", "");
                localStorage.setItem("accessToken", "");
                props.setIsLoggedIn(false);
              }}
            />
          ) : (
            <LoginOptions />
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Header;
