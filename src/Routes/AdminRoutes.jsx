import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminpending] = useAdmin()
    const location = useLocation()

    if (loading || isAdminpending) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;