import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

export default function protectedRoute() {

    let isAuth = localStorage.getItem("IsAuth");
    console.log("local storage", isAuth);
  return (  
            isAuth  ? <Outlet/> : <Navigate to="/login"/>
        
  )
}
