
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../pages/HomeView/HomeView";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<HomeView />
      }
    ]
  }
]);
export default router;