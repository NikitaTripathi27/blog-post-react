import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Blog = (props) => {



  const navigate = useNavigate()
  const handleClick=(id)=>{
    navigate(`/blog/id/${id}`)
  }

  const handleButtonClick =(id)=>{
    const username = localStorage.getItem('username')
    console.log(username)
    if(username){
      navigate(`/blog/id/${id}`)
    }
    else{
      navigate('/login')
    }
   
  }

  return (
    <Card sx={{ width: '100%' }}  >
      <CardHeader title={props.card.title} onClick={()=>handleClick(props.card._id)}/>
      <CardMedia component="img" image={props.card.image} height="240" />
      <CardContent sx={{height: '7rem'}} onClick={()=>handleClick(props.card._id)}>
        <Typography variant="subtitle1" sx={{color: 'orange'}}>{props.card.author}</Typography>
        <Typography variant="h5">{props.card.brief}</Typography>
        <Typography variant="body2">{props.card.content.substring(0, 100)}</Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item sm={8}>
            <Button variant='outlined' onClick={()=>handleButtonClick(props.card._id)}>comments</Button>
          </Grid>
          <Grid item sm={2}>
            <Button startIcon={<ThumbUpIcon />} color='success' onClick={()=>handleButtonClick(props.card._id)}/>
            
          </Grid>
          <Grid item sm={2}>
          <Button startIcon={<ThumbDownIcon />} color='error' onClick={()=>handleButtonClick(props.card._id)}/>
          
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Blog;
