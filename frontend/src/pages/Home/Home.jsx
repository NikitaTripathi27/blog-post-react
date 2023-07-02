import { useNavigate } from "react-router-dom";
import {getblogs} from "../../routes/blogs.routes"
import Box from '@mui/material/Box';
import Header from '../../components/Header/Header'
import './Home.css';
import { Grid , Card, CardContent, Typography ,CardActions ,Button} from '@mui/material';
import { useEffect, useState } from 'react';

const Home = (props) => {
    const navigate = useNavigate()
    const[blogs ,setblogs] = useState([])
    const getpost = async() =>{
        try{
        const result = await getblogs();
        console.log(result)
        setblogs(result)
        }catch(error){
            throw new Error(error)
        }
    }

    useEffect(()=>{
        getpost()
    },[])

    const handleClick=(id)=>{
        navigate(`/blog/id/${id}`)
    }
    return (
    <Box>
        <Header />
        <Grid container>
            {blogs.map((item , index) =>
                (
                    <Grid item key={index} p={3}>
                        <Card  sx={{height:'20rem', width:'20rem'}}>
                            <CardContent>
                            <Typography p={3}>
                                    {item.title}
                                </Typography>
                               
                                <Typography p={2}>
                                    {item.content}
                                </Typography>
                                <Typography p={3}>
                                   Author: {item.author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" p={1} onClick={()=>handleClick(item._id)}>Learn More</Button>
                                </CardActions>
                        </Card>
                        </Grid>

                )
            )}
          
            </Grid>
    </Box>
    );
}
 
export default Home;