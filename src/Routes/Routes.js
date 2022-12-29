import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/Add/AddTask";
import Completed from "../Pages/Completed/Completed";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyTask from "../Pages/MyTask/MyTask";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/add',
                        element: <AddTask></AddTask>
                    },
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/signup',
                        element: <SignUp></SignUp>
                    },
                    {
                        path: '/mytask',
                        element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
                    },
                    {
                        path: '/completed',
                        element: <PrivateRoute><Completed></Completed></PrivateRoute>
                    }
        ]  
    }
])

export default router;