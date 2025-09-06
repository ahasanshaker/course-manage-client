import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayouts from '../Layouts/RootLayouts';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/Home/Login/SignIn';
import AddCourse from '../Pages/AddCourse';
import PrivateRoute from './PrivateRoute';
import CourseDetails from '../Pages/Shared/CourseDetails';
import EnroolNow from '../Pages/EnroolNow';
import MyEnroll from '../Pages/MyEnroll';
import AllCourses from '../Pages/Shared/AllCourses';

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
            path: '/courses/:id',
            element: 
              <CourseDetails></CourseDetails>,
          
            loader: ({params})=> fetch(`http://localhost:3000/courses/${params.id}`)
        },
        {
            path: '/signIn',
            Component: SignIn
        },
        {
            path: 'all-course',
            Component: AllCourses
        },
        {
            path: '/signIn',
            Component: SignIn
        },
        {
            path: '/my-enrollment',
            element: <PrivateRoute>
              <MyEnroll></MyEnroll>
            </PrivateRoute>
        },
        {
            path: '/enrolNow/:id',
            element: <PrivateRoute>
              <EnroolNow></EnroolNow>
            </PrivateRoute>
        },
        {
            path: '/add-course',
            element: <PrivateRoute>
              <AddCourse></AddCourse>
            </PrivateRoute>
        },
      
    ]
  },
]);

export default router;