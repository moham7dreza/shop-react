import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./App/index.js";
import {RouterProvider} from "react-router-dom";
import {router} from "./Routes/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}>
              <App/>
          </RouterProvider>
      </Provider>
  </React.StrictMode>,
)
