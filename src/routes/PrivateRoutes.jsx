import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes({ currentUser }) {
    return currentUser ? <Outlet /> : <Navigate to={'/'} />
}
