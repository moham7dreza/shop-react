import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../Components/Layouts/MainLayout.jsx";
import {Show} from "../Components/Section/Layout/Show.jsx";
import {E404} from "../Components/Error/E404.jsx";

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
                path: 'items/:id',
                element: <Show/>
            },
        ]
    }
])