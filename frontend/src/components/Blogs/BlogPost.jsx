import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../config/config"
import axios from "axios"
import Button from "@mui/material/Button"
import './BlogPost.css'
import { TextField, Typography } from "@mui/material";
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
     } from "@mui/material";
import {useNavigate} from "react-router-dom"
const BlogPost = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [details ,setdetails] = useState({})
    const [commentsection ,setcommentsection] =useState([])
    const [submitform, setsubmitform] =useState({
        "content":'',
        "author":''
    })
   
    const[usercomment ,setusercomment] = useState(null)
    const postDetails =async (id) =>{
        const res = await axios.get(`${config.endpoint}/blog/id/${id}`)
        console.log(res.data.comments)
        setdetails(res.data);
        setcommentsection(res.data.comments)
    }

    useEffect(()=>{
        postDetails(params.id)
    },[params.id])
    
    const addCommentToBlog =async(id , body)=>{
        console.log(body)
        const response = await axios.put(`${config.endpoint}/blog/${id}/comment`,
            body
        )
        setcommentsection(response)
     
        if(response.status !== 200){
            throw new Error(response.data.message)
        }
        return response
    }

    const handleSubmit=(id)=>{
        
        if(!localStorage.getItem('username')){
            navigate('/login')
        }
        const obj={
            "content":submitform.content,
            "author":localStorage.getItem('username')
        }
        addCommentToBlog(id , obj );
    }
  

    return ( 
    <>
        <Card sx={{ width: '100%' ,paddingBottom:'8rem'}} >
      <CardHeader />
      <CardMedia component="img" image={details.image} height="390" />
      <CardContent sx={{height: '7rem'}}>
        <Typography variant="subtitle1" sx={{color: 'orange'}}>{details.author}</Typography>
        <Typography variant="h5" >{details.brief}</Typography>
        <Typography variant="body2">{details.content}</Typography>
      </CardContent>
   
    </Card>
    <h3>Comments</h3>
    
     {commentsection.length!==0 && commentsection.map((item)=>(
        <>
        <div className="comment-text">
            <span>{item.content}</span><span>- {item.author}</span>
        </div>
        </>
     ))}

    <TextField
        placeholder="Add comment"
        fullWidth
        name="content"
        sx={{padding:'1rem'}}
       
        onChange={(e)=>setsubmitform({"content":e.target.value})}
        />
        <Button type="submit"  onClick={()=>handleSubmit(details._id)}>Submit</Button>
    </> 
    );
}
 
export default BlogPost;
