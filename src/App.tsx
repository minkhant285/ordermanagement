import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/Product",
        element: <div>THis is product</div>
    }
]);

function App() {


    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}

export default App
