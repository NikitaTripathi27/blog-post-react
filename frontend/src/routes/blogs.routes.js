import axios from "axios"
import config from "../config/config"
export const createblogs=async(body)=>{
    const {author ,title ,content } = body
    const response = await axios.post(`${config.endpoint}/blog/new`,{
        author,
        title,
        content
    }) 

    if(response.status != 200){
        throw new Error(response.data.message)
    }

    return response.data

}

export const getblogs=async()=>{
   
    const response = await axios.get(`${config.endpoint}/blog/all`) 

    if(response.status != 200){
        throw new Error(response.data.message)
    }

    return response.data

}