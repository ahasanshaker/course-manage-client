import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
// import { AuthContext } from '../../Context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <p>Loading...</p>; // Optional: show loader while auth state is being checked
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname} replace />; // Redirect to sign in if not logged in
    }

    return children; // Render the protected component
};

export default PrivateRoute;
