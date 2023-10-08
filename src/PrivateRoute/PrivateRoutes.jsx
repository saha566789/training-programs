
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Hooks/AuthProvider";


const PrivateRoutes = ({children}) => {
    const { user,loading } = useContext(AuthContext);
 const location = useLocation()
 console.log(location)

    if (loading) return <h1 className="text-5xl">Loading....</h1>

    if (!user?.email) {
        return <Navigate state={location.pathname} to='/login' />
    }



    return children;
};

export default PrivateRoutes;