import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";

import Button from '@mui/material/Button';

import './Header.css';


const Header = (props) => {

  const navigate = useNavigate();

  const UserInfo = () => {
    return (
      <Stack
      direction='row'
      >
        <Button
        variant="outlined"
        onClick={() => {}}
        >
          {}
        </Button>
      </Stack>
    );
  }

  const LoginOptions = () => {
    return (
      <Stack direction='row' spacing={2}>
        <Button
        variant="contained"
        onClick={() => navigate('/login')}
        >
          Login
        </Button>
        <Button
        variant="contained"
        color="success"
        onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </Stack>
    )
  }

  return (
    <Box sx={{width:"120vmin"}}>
      <Paper >
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ padding: '0.5rem 1rem'}}>

          {/* App Site Logo */}
          <Avatar src="vite.svg" alt="logo" sx={{ width: '3rem', height: '3rem' }} />

          {/* Login Buttons */}
          {
            props?.isLoggedIn
              ?
              <UserInfo />
              :
              <LoginOptions />
          }

        </Stack>
      </Paper>
    </Box>
  );
}

export default Header;