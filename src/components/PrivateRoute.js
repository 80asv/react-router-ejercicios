import React from 'react'
import { Navigate } from 'react-router-dom';

// simulacion de autenticacion de usuario
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ element: Component }) => {
    return auth ? Component : <Navigate to="/login" />;
};

export default PrivateRoute