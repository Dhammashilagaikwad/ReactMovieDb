import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Popular from "./Popular";

function App(){
    return(
        <>
        <Header/>
         <Outlet/>
        <Popular />
       
        </>
    )
}

export default App;