import React from "react";
import "./Post.css";
import { Avatar, Link, Typography } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';



function Post({postDetails}){
    // console.log("post",postDetails)
return(
    <div className="post__container">
    {/* Header */}
  <div className="post__header">
        <Avatar className="post__image" src="" />
        <div className="post__username">{postDetails.username}</div>
  </div>

  {/* Image */}
  <div>
      <img src={postDetails.imageurl} width="615px"/> 
  </div>
<div><Typography>{postDetails?.description}</Typography></div>
  
  <div style={{display:"flex"}} className="post_reactimage">
      <div style={{marginLeft:65,display:"flex" ,marginTop:30}}> 
        <div style={{display:"flex"}}>
          <ThumbUpOffAltIcon/>
          <Typography sx={{marginLeft: "15px"}}>59</Typography>
        </div> 

           
      </div>
      <div style={{"marginLeft":"400px",display:"flex",marginTop:30}}>
      <Link href="/Home/CommentList">
        <div style={{display:"flex"}}>
            <ChatBubbleOutlineIcon/>
            <Typography sx={{marginLeft: "15px"}}>68</Typography>
        </div>

      </Link>
      </div>

  </div>

  {/* Comment Section */}
  {/* <div>
      {
          this.state.commentList.map((item,index)=>(
              index < 4 ?
                <div className="post_comment">{item.userName}: {item.comment}</div> :<span></span>
          ))
      }
      <input text="text" onKeyPress={this.submitComments} className="post__commentbox" placeholder="Add a comment..." />
  </div> */}
  
</div>   
)
}

export default Post