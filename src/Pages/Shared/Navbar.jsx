import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = (
        <>
            <li><NavLink className='btn btn-primary' to='/'>Home</NavLink></li>
            {user&&             <li><NavLink className='btn btn-primary' to='/add-course'>Add Course</NavLink></li>
}
            {user && <li><NavLink className='btn btn-primary' to='/my-enrollment'>My Enrollment</NavLink></li>}
            <li><NavLink className='btn btn-primary' to='/all-course'>All Course</NavLink></li>
        </>
    );

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log("User logged out");
                navigate("/signIn");
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-y-2">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SERA COURSE</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {user ? (
                    <>
                        <span className="font-medium">{user?.email}</span>
                        <button onClick={handleLogout} className="btn btn-error btn-sm">Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/signIn' className='btn btn-primary btn-sm'>Sign In</NavLink>
                        <NavLink to='/register' className='btn btn-primary btn-sm'>Register</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
