import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import NavBar from "./app/component/NavBar/NavBar";
import Home from "./app/screen/Home/Home";
import Settings from "./app/screen/Settings/Settings";
import Live from "./app/screen/Live/Live";
import Analysis from "./app/screen/Analysis/Analysis";
import Recordings from "./app/screen/Recordings/Recordings";
import Meetings from "./app/screen/Meetings/Meetings";
import MeetingSteps from "./app/screen/MeetingDetails/MeetingsDetailsComposer";

function App() {
    return (
        <BrowserRouter>
            <NavBar>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/meetings"} element={<Meetings />} />
                    <Route path={"/meetings/:conferenceId"} element={<MeetingSteps />} />
                    <Route path={"/settings"} element={<Settings />} />
                    <Route path={"/live"} element={<Live />} />
                    <Route path={"/home"} element={<Home />} />
                    <Route path={"/analysis"} element={<Analysis />} />
                    <Route path={"/recordings"} element={<Recordings />} />
                </Routes>
            </NavBar>
        </BrowserRouter>
    );
}

export default App;
