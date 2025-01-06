import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./App/index.js";
import {RouterProvider} from "react-router-dom";
import {router} from "./Routes/index.jsx";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <ToastContainer/>
        </Provider>
    </StrictMode>
)
