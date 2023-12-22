import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Dashboard from "../dashboard/Dashboard";
import NewTask from "../dashboard/newTask/NewTask";
import PreviousTask from "../dashboard/previusTask/PreviousTask";
import Update from "../dashboard/update/Update";
import DeveloperSection from "../pages/DeveloperSection/DeveloperSection";
import BankerSection from "../pages/BankerSection/BankerSection";
import CorporateProfessionalsSection from "../pages/CorporateProfessionalsSection/CorporateProfessionalsSection";





const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/developer',
        element:<DeveloperSection></DeveloperSection>
      },
      {
        path:'/banker',
        element:<BankerSection></BankerSection>
      },

      {
        path:'/corporate',
        element:<CorporateProfessionalsSection></CorporateProfessionalsSection>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [

      {
        path:'newTask',
        element:<NewTask></NewTask>,

      },
      {
       path:'previousTask',
       element:<PreviousTask></PreviousTask>,
      },
      {
        path:"/dashboard/update/:id",
        element:<Update></Update>,
      },

    ]
  }
]);
export default Router;