import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details/Details";
import Products from "../Pages/Home/Products/Products";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Products></Products>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes> <Secret></Secret></PrivateRoutes>
            },
            {
                path: 'detail/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // addmin routes
            {
                path: 'addProduct',
                element: <AdminRoutes><AddProduct></AddProduct></AdminRoutes>
            },
            {
                path: 'manageProduct',
                element: <AdminRoutes><ManageProduct></ManageProduct></AdminRoutes>
            },
            {
                path: 'updateProduct/:id',
                element: <AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'allUsers',
                element: <AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
]);