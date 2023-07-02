import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config/config"
import axios from "axios"
import Stack from "@mui/material/Stack"
import './BlogPost.css'
import { TextField, Typography } from "@mui/material";
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
     } from "@mui/material";
const BlogPost = () => {

    const params = useParams()
    const [details ,setdetails] = useState({})
    const postDetails =async (id) =>{
        const res = await axios.get(`${config.endpoint}/blog/id/${id}`)
        console.log(res.data)
        setdetails(res.data);
    }

    useEffect(()=>{
        postDetails(params.id)
    },[params.id])
    
    return ( 
    <>
        <Card sx={{ width: '100%' ,paddingBottom:'4rem'}} >
      <CardHeader />
      <CardMedia component="img" image={details.image} height="390" />
      <CardContent sx={{height: '7rem'}}>
        <Typography variant="subtitle1" sx={{color: 'orange'}}>{details.author}</Typography>
        <Typography variant="h5">{details.brief}</Typography>
        <Typography variant="body2">{details.content}</Typography>
      </CardContent>
   
    </Card>
    <h3>Comments</h3>
    <TextField
    placeholder="Add comment"
    fullWidth
     />
    </> 
    );
}
 
export default BlogPost;