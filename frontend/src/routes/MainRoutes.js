import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Stories from "../pages/StoryPage";
import AddStory from "../pages/AddStory"; 
import MyPosts from "../pages/MyPosts";
import EditPost from "../pages/EditPost";
import EditStory from "../pages/EditStory";
import CommentList from "../pages/CommentsList";
import EditComment from "../pages/EditComment";


const MainRoutes = 
 createBrowserRouter ([
  
  {
    path: "/Home",
    element: <MainLayout/>,
    children: [
      {
        path: "/Home/:id",
        element: <Home/>
      },
      {
        path: "/Home/Profile/:id",
        element: <Profile/>
      },
      {
        path: "/Home/Stories",
        element: <Stories/>
      },
      {
        path: "/Home/AddStory",
        element: <AddStory/>
      },
      {
        path: "/Home/EditStory/:sid",
        element: <EditStory/>
      },
      {
        path: "/Home/MyPosts",
        element: <MyPosts/>
      },
      {
        path: "/Home/EditPost/:pid",
        element: <EditPost/>
      },
      {
        path: "/Home/CommentList",
        element: <CommentList/>
      },
      {
        path: "/Home/EditComment/:cid",
        element: <EditComment/>
      }
    ]},

     {   
        path: "/SignUp",
        element: <SignUp/>,
      },
     {
      path: "/",
      element: <SignIn/>,
     }
  ])
        

export default MainRoutes;