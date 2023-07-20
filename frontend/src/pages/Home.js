import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostsContainer from "../components/PostsContainer";
import pp from "../images/pp1.png";
import { Link } from "react-router-dom";

function Home(){
    const URL_path = window.location.pathname;
    const uid = URL_path.substring(6);


return(
    <div>
        <Link to={`/Home/Profile/${uid}`}>                              
                <Avatar src={pp} className="navbar__img" style={{maxWidth:"300px",maxHeight:"80px",zIndex:4,position:"fixed",right:60,top:100}} />
        </Link>
    <Grid container>
        <Grid item xs={2}></Grid>
        
        <Grid item xs={6} className="maincontent__container">

            <div>
                <PostsContainer/>
            </div>
    
        </Grid>
    </Grid>
</div>
)
}

export default Home;