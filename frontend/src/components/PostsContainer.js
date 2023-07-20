import React, { Component, useEffect, useState } from 'react';
import Post from "./Post";


function PostsContainer(){
    const [postArray,setPosts] = useState([]);
   

    const getPost = () => { 

        let data=[
            {
                "postId":"123456",
                "username":"anindya",
                "imageurl":"https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/healthy-foods-to-eat.jpg?v=1611988563&width=1000",
                "timeStamp":"12345",
                "likes":"1634"
            },
            {
                "postId":"123457",
                "username":"john",
                "imageurl":"https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
                "timeStamp":"12345",
                "likes":"3134"
            },
            {
                "postId":"123458",
                "username":"jane",
                "imageurl":"https://media.istockphoto.com/id/1455050837/photo/super-bowl-or-football-theme-food-table-scene-overhead-view-on-dark-wood.jpg?s=1024x1024&w=is&k=20&c=kYyKQvqxTQRZkZAPv3QosTabVF9ApgffDzeYqTf03V4=",
                "timeStamp":"12345",
                "likes":"2084"
            },
            {
                "postId":"123459",
                "username":"peter",
                "imageurl":"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-be3500.jpg",
                "timeStamp":"1256",
                "likes":"1232"
            },
            {
                "postId":"123460",
                "username":"senir",
                "imageurl":"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg",
                "timeStamp":"1258",
                "likes":"1432"
            },
        ];
        setPosts(data);
    }

    useEffect(() =>{
        getPost();
    },[])

    return ( 
        <div >
            { postArray && postArray.map((item,index)=>( <Post postDetails={item} /> ))}
        </div>
    );
}

export default PostsContainer;
