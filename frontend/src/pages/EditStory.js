import React, { useEffect, useState } from "react";
import "./AddStory.css";
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Snackbar } from "@mui/material";

function EditStory(){

const navigate = useNavigate();
const [SID,setStoryID]= useState();
const[name,setName] = useState();
const[caption,setCaption] = useState();
const[imageURL,setImageURL] = useState();

const [notify, setnotify] = useState(false);
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  useEffect(() => {
    const URL_path = window.location.pathname;
    const sid = URL_path.substring(16);
    setStoryID(sid)
    axios.get(`http://localhost:8080/story/get/${sid}`)
    .then(response =>{
        const storyData = response.data;
         setName(storyData?.username || "");
         setCaption(storyData?.caption || "");
         setImageURL(storyData?.imgurl || "");
    }
        )
    .catch(error => console.error(error));

  }, []);

const handleSubmit= async (event) =>{
    event.preventDefault()
    const story ={
        username:name,
        caption:caption,
        imgurl:imageURL
    }
    const url = `http://localhost:8080/story/update/${SID}`;
    try {
        await axios.put(url, story);
        setnotify(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2.5 seconds
        navigate('/Home/Stories');
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
        The Story was Successfully Updated !
        </Alert>
     </Snackbar>
    <h1 >Edit your Story</h1>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            UserName:
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
            Caption:
                <input 
                    type="text" 
                    name="subject" 
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)}
                />
            </label>
            <br />
            <label>
            ImageURL:
                <input 
                    type="text" 
                    name="subject" 
                    value={imageURL}
                    onChange={(event) => setImageURL(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Edit your story" />
        </form>
        </div>
    </>
)

}

export default EditStory;