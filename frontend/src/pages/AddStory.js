import React, { useState } from "react";
import "./AddStory.css";
import { useNavigate } from 'react-router-dom';

function AddStory(){

const navigate = useNavigate();
const[name,setName] = useState();
const[caption,setCaption] = useState();
const[imageURL,setImageURL] = useState();

const handleSubmit = async(event) =>{
    event.preventDefault();
    const story = ({
        username:name,
        caption:caption,
        imgurl:imageURL
    })
    
    // console.log("story",story)

      fetch("http://localhost:8080/story/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(story)

    }).then(()=>{
      console.log("New story created")
      navigate('/Home/Stories')
    })
}

return(
    <>
    <h1 >Create a Story</h1>
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
            <input type="submit" value="Create a story" />
        </form>
        </div>
    </>
)

}

export default AddStory;