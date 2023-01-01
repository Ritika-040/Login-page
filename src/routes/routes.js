import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import SignUp from "../components/signUp";
import Login from "../components/login";
const PublicRoutes = ()=>{
    return (
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
        
    )
}
export default PublicRoutes;