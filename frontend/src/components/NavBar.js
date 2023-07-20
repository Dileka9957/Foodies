import React from "react";
import home from "../images/home.svg";
import message from "../images/message.svg";
import find from "../images/find.svg";
import react from "../images/love.svg";
import foodies_logo from "../images/foodies_logo.svg";
import home_logo from "../images/icons8-home.svg";
import home2_logo from "../images/icons8-home1.svg";
import stories from "../images/stories.svg";
import posts from "../images/posts1.svg";
import pp from "../images/pp1.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Avatar, Box, Divider, Grid } from "@mui/material";
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function NavBar(){
    return(
        <>
                <div className="navbar__barContent">

                    <Grid container >
                        <div  className="container">
                        <Grid item xs={2}>
                            {/* <Link to="/Home" sr> */}
                                <img  src={foodies_logo} width="110px" />  
                            {/* </Link> */}
                        </Grid>

                        <Grid item xs={5} sx={{marginTop:1}}>
                           <input text="text" className="navbar__searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={5} style={{"display":"flex"}}>

                            {/* <Link to="/Home">
                                <AddCircleOutlineOutlinedIcon fontSize="large" sx={{marginTop:1}}/>                            
                            </Link> */}

                            <Link to="/Home/Stories">
                                <img  src={stories} width="60px" style={{marginTop:"10px"}}/>  
                            </Link>
                            <Box sx={{flexGrow: 0.2}}></Box>
                            <Link to="/Home/MyPosts">
                                <img  src={posts} width="55px" style={{marginTop:"10px"}}/>  
                            </Link>
                            
                            <Link to="/Home/Profile">                              
                                <Avatar src={pp} className="navbar__img" style={{"maxWidth":"300px","maxHeight":"80px",position:"fixed",right:30,top:10}} />
                            </Link>

                        </Grid>
                        </div>
                    </Grid>
                  
                </div>
        </>
    )

}

export default NavBar