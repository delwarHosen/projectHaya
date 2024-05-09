import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router"

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace ></Navigate>

};

export default PrivateRoutes;