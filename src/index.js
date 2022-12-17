import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import{RouterProvider} from "react-router-dom"
import router from "./router/index"

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
    </Helmet>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
