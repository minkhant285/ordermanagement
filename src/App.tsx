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
        element: <div>Product Page</div>
    },
    {
        path: "/order",
        element: <div>Order Page YHA</div>
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
