import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayout(){

    return(
        <>
        <div style={{marginBottom:100}}><NavBar/></div>
        <Outlet/>
        </>
    )

}

export default MainLayout