import React, { useEffect, useState } from "react";
import "./AddStory.css";
import { useNavigate, useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Snackbar } from "@mui/material";

function EditPost(){
    
    const navigate = useNavigate();
    const[PId,setPostID]= useState();
    const[username,setUsername]=useState();
    const[foodname,setFoodname]=useState();
    const[description,setDescription]=useState();
    const[imageurl,setImageurl]=useState();
    // const [postData,setPostData] = useState();


    const [notify, setnotify] = useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

      useEffect(() => {
        const URL_path = window.location.pathname;
        const pid = URL_path.substring(15);
        //  console.log("id:",pid)
        setPostID(pid)
        axios.get(`http://localhost:8080/post/get/${pid}`)
        .then(response =>{
            const postData = response.data;
            setUsername(postData?.username || "");
            setFoodname(postData?.foodname || "");
            setDescription(postData?.description || "");
            setImageurl(postData?.imageurl || "");
        }
            )
        .catch(error => console.error(error));

      }, []);

    const handleSubmit= async (event) =>{
        event.preventDefault()
        const post ={
            username:username,
            foodname:foodname,
            description:description,
            imageurl:imageurl
        }
        // console.log("post::",post)
        const url = `http://localhost:8080/post/update/${PId}`;
        try {
            await axios.put(url, post);
            setnotify(true);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2.5 seconds
            navigate('/Home/MyPosts');
          } catch (error) {
            console.error(error);
          } 
    }

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }    
            setnotify(false);
        }; 

    return(
        <>
            <Snackbar open={notify} autoHideDuration={2500} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Post details Successfully Updated !
                </Alert>
            </Snackbar>
        <h1>Edit post</h1>
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
            <input type="submit" value="Edit Post" />
        </form>
        </div>
        </>
    )
}
export default EditPost;