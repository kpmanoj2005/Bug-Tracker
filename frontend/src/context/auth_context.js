import React from "react";
import { Router,Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Bugs from "./pages/Bugs";
import ReportBug from "./pages/ReportBug";
import PrivateRoute from "./utils/PrivateRoute";


export default function App(){
    return <div>
        <Navbar>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/projects" element={
                    <PrivateRoute>
                        <Projects/>
                    </PrivateRoute>
                }/>
                <Route path="/bug" element={
                    <PrivateRoute>
                        <Bugs/>
                    </PrivateRoute>
                }/>
                <Route path="/report" element={
                    <PrivateRoute>
                        <ReportBug />
                    </PrivateRoute>
                }/>
            </Routes>
        </Navbar>
    </div>
}