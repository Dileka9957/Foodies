import { Avatar, Box, Button, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import "./CommentsList.css";
import { useNavigate } from "react-router-dom";


function CommentList(){
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [myComments, setMyComments] = useState([]);
    const [comment, setComment] = useState('');
    const [commentData, setCommentData] = useState('');
    const ariaLabel = { 'aria-label': 'description' };

    useEffect(()=>{
        fetch('http://localhost:8080/comment/getAll')
        .then(response => response.json())
        .then(data => {
            setMyComments(data)
        })
        .catch(error => {
          console.log(error)
        });
    },[])

    const handleChange = (e) => {
        setComment(e.target.value);
            
    };

    const handleDelete = (cid) => {
        axios
        .delete(`http://localhost:8080/comment/delete/${cid}`)
        .then((response) => {
          console.log(response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
            
    };

    const sendComment = async (event) => {
         
    const newComment = ({comment:comment})
      fetch("http://localhost:8080/comment/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newComment)

    }).then(()=>{
        setComments([...comments,newComment])
        setComment('')
      console.log("New comment created")
    })
       
    };


    const getCommentData = () => { 

        let data=[
            {               
                "username":"anindya",
                "comment":"Count Memories, not calories.",
                "time":" 2 hours ago"
                // "likes":"1634"
            },
            {
                "username":"john",
                "comment":"I don’t want to regret that I should have eaten that",
                "time":" 3 days ago"
            },
            {
                "username":"jane",
                "comment":"Bliss on a plate!",
                "time":" 20 minutes ago"
            },
            {
                "username":"peter",
                "comment":"Good Food equals Good Mood",
                "time":" 2 week ago"
            },
            {
                "username":"senir",
                "comment":"Looks tempting.",
                "time":" 4 months ago"
            }
        ];
        setCommentData(data);

    }

    const handleUpdate =(cid) =>{
        navigate(`/Home/EditComment/${cid}`)
    }

    useEffect(() =>{
        getCommentData();
    },[])

return(
    <Grid flexGrow={1}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} className="comment-toolbar">
                   
                </Grid>
            </Grid>
            <Grid flexGrow={1}>
                <Box
                    mb={8}
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{marginLeft:"140px"}} alt="Remy Sharp" src={"#"} />
                    
                    <TextField
                    id="standard-basic"
                    placeholder='Add a comment...' 
                    color="secondary"
                     inputProps={ariaLabel}
                    
                    variant="standard" 
                    onChange={handleChange}
                    value={comment}
                    style={{ width: '50%',marginLeft:'30px' }}
                    // inputProps={{}}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') { 
                        ev.preventDefault();
                          sendComment()
                          setComment('')                                     
                        }
                      }}
                    />
                    

                    <Button className="comment-button" backgroundColor='primary' 
                     onClick={(event) => 
                      {
                        event.preventDefault();
                        sendComment()
                        setComment('')
                        }}>
                        <Typography sx={{color:'white'}}><SendIcon color='secondary' /></Typography>
                    </Button>
                </Box>

                <Box>

                {myComments && myComments.map((item,index) =>(
                    <Box sx={{marginLeft:"80px",display: 'flex', alignItems: 'center' }} key={index} mb={3}>
                    <Box><Avatar src={item.picture} alt="Remy Sharp" sx={{height:50,width:50}}/></Box>

                    <Box className="comment-text" >
                            <Box display={"flex"} gap={"20px"}>
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{ fontSize:'14px' , fontWeight:'550'}}>
                                me 
                                </Typography>
                                
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{color:'gray', fontSize:'13px' , fontWeight:'300'}}>
                                    5 minutes ago
                                </Typography>
                            </Box>
           
                            <Typography variant="body2" gutterBottom component="div" sx={{ fontSize:'14px' , fontWeight:'500'}}>
                                {item.comment}
                            </Typography>
                    </Box>
                    <Box>
                        <IconButton sx={{backgroundColor:"orange",marginRight:1}}  component="label" onClick={() =>handleUpdate(item.cid)} >
                        <ModeEditIcon/>
                        </IconButton>
                        <IconButton sx={{backgroundColor:"red"}}  component="label" onClick={() =>handleDelete(item.cid)}>
                        <DeleteIcon/>
                        </IconButton>
                    </Box>


                    </Box>
                ))}

                {commentData && commentData.map((item,index) =>(
                    <Box sx={{marginLeft:"80px",display: 'flex', alignItems: 'center' }} key={index} mb={3}>
                    <Box><Avatar src={item.picture} alt="Remy Sharp" sx={{height:50,width:50}}/></Box>

                    <Box className="comment-text" >
                            <Box display={"flex"} gap={"20px"}>
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{ fontSize:'14px' , fontWeight:'550'}}>
                                {item.username} 
                                </Typography>
                                
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{color:'gray', fontSize:'13px' , fontWeight:'300'}}>
                                    {item.time}
                                </Typography>
                            </Box>
           
                            <Typography variant="body2" gutterBottom component="div" sx={{ fontSize:'14px' , fontWeight:'500'}}>
                                {item.comment}
                            </Typography>
                        </Box>

                    </Box>
                ))}

                </Box>

            </Grid>
        </Grid>
)

}

export default CommentList;