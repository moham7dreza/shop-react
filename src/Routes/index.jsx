import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../Components/Layouts/MainLayout.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/',
                element: <App/>
            },
        ]
    }
])