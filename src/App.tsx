import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Meeting from "./app/screen/Meeting/Meeting";
import NavBar from "./app/component/NavBar/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/page",
        element: <Meeting/>,
    },
]);

function App() {
    return (
        <><NavBar>
            <RouterProvider router={router} />
        </NavBar></>
    )
        ;
}

export default App;
