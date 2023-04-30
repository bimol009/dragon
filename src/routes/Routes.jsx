import Category from "../Page/Home/Category/Category";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login/Login";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Main from "../layout/Main";
import News from "../Page/Home/Home/News/News/News";
import NewsLayout from "../layout/NewsLayout";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../Page/Login/Register";
import Terms from "../Page/Terms/Terms";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
    },

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>,

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            }
        ]
    },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
