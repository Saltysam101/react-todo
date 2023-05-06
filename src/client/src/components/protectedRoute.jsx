import React from 'react';
import {Outlet, Navigate, useLocation} from 'react-router-dom';

export default function ProtectedRoute() {

  const location = useLocation()

    let isAuth = localStorage.getItem("IsAuth");
    console.log("local storage", isAuth);
  return isAuth  ? <Outlet/> : <Navigate to="/login" replace state={location}/>
}
