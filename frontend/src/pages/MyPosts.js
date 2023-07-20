import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function MyPosts(){
    const navigate = useNavigate();
    const[posts,setPosts]=useState();
    const[username,setUsername]=useState();
    const[foodname,setFoodname]=useState();
    const[description,setDescription]=useState();
    const[imageurl,setImageurl]=useState();

useEffect(()=>{
    fetch('http://localhost:8080/post/getAll')
    .then(response => response.json())
    .then(data => {
        setPosts(data)
        // console.log("posts",data)
    })
    .catch(error => {
      console.log(error)
    });
},[])

    const handleSubmit= (event) =>{
        event.preventDefault();
        const post = ({
            username:username,
            foodname:foodname,
            imageurl:imageurl,
            description:description
        })
        
        setPosts([...posts,post])
    
          fetch("http://localhost:8080/post/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(post)
    
        }).then(()=>{
          console.log("New post created")
        })
    }

    const handleUpdate =(pid) =>{
            navigate(`/Home/EditPost/${pid}`)
    }

    const handleDelete =(pid) =>{
        
        axios
        .delete(`http://localhost:8080/post/delete/${pid}`)
        .then((response) => {
          console.log(response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
       
      
    }


    return(
        <>
        <h1>Your posts</h1>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            UserName:
                <input 
                    type="text" 
                    name="name" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label>
            Food/Beverage Name:
                <input 
                    type="text" 
                    name="food" 
                    value={foodname}
                    onChange={(event) => setFoodname(event.target.value)}
                />
            </label>
            <br />
            <label>
            Description:
                <input 
                    type="text" 
                    name="description" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <label>
            ImageURL:
                <input 
                    type="text" 
                    name="image" 
                    value={imageurl}
                    onChange={(event) => setImageurl(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Create a Post" />
        </form>
        </div>
        <br />
        <br />
        { posts?.map((item,index)=>(
            <div key={index}>
                <Post postDetails={item} />
                <Button variant="contained" sx={{marginBottom:10, backgroundColor:"red", marginRight:5}} onClick={() =>handleDelete(item.pid)}>Delete post</Button>
                <Button variant="contained" sx={{marginBottom:10, backgroundColor:"orange"}} onClick={() =>handleUpdate(item.pid)}>Update post</Button>
            </div>))}
        
        </>
    )
}

export default MyPosts;