import { useNavigate } from "react-router-dom";
import { getblogs } from "../../routes/blogs.routes";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header";
import "./Home.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { useEffect, useState } from "react";
import Blog from "../../components/Blog/Blog";

const Home = (props) => {
  const navigate = useNavigate();
  const [blogs, setblogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    accessToken: "",
  });

  const getpost = async () => {
    try {
      const result = await getblogs();
      console.log(result);
      setblogs(result);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getUserData = () => {
    try {
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("email");
      const accessToken = localStorage.getItem("accessToken");
      setUser({ username, email, accessToken });
      if (username && email && accessToken) setIsLoggedIn(true);
      else throw new Error("USer Not Logged IN!");
    } catch (e) {
      console.log(e);
      localStorage.setItem("username", '');
      localStorage.setItem("email", '');
      localStorage.setItem("accessToken", '');
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    getpost();
    getUserData();
  }, []);

  return (
    <Box>
      <Header isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} />

      <Grid container my={2} spacing={3}>
        {blogs.map((card, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Blog card={card} onAction={() => {}} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
