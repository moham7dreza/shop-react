import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../Components/Layouts/MainLayout.jsx";
import {Show} from "../Components/Item/Pages/Show.jsx";
import {E404} from "../Components/Error/E404.jsx";
import {Login} from "../Components/Pages/Auth/Login.jsx";
import {Register} from "../Components/Pages/Auth/Register.jsx";
import {ForgotPassword} from "../Components/Pages/Auth/ForgotPassword.jsx";
import {Terms} from "../Components/Pages/Terms.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <E404/>,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'password',
                element: <ForgotPassword/>
            },
            {
                path: 'terms',
                element: <Terms/>
            },
            {
                path: 'items/:id',
                element: <Show/>
            },
        ]
    }
])