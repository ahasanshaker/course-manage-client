import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayouts from '../Layouts/RootLayouts';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/Home/Login/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children:[
        {
            index: true,
            Component: Home

        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/signIn',
            Component: SignIn
        },
    ]
  },
]);

export default router;