
import { useDispatch, useSelector } from 'react-redux';
import Clock from './Clock.jsx';
import { NavLink } from "react-router-dom"
import { setUser } from '../redux/userslice.js';


function Navbar() {


    const user = useSelector((state) => state.userInfo.user)
    const dispatch = useDispatch()

    function handleuser() {
        dispatch(setUser(null))
    }

    console.log("navbar")
    return (

        <nav className="navbar">
            <Clock />
            {!user && <NavLink
                to="/"
                className={({ isActive }) => isActive ? "anchor active" : "anchor"}
            >
                Home
            </NavLink>}

            <NavLink
                to="/menu"
                className={({ isActive }) => isActive ? "anchor active" : "anchor"}
            >
                Menu
            </NavLink>

            { user?.admin==="true" && <NavLink
                to="/additems"
                className={({ isActive }) => isActive ? "anchor active" : "anchor"}
            >
                AddItems
            </NavLink>}

            {console.log(user)}
            {!user && <NavLink
                to="/login"
                className={({ isActive }) => isActive ? "anchor active" : "anchor"}
            >
                Login
            </NavLink>}
            {user && <NavLink
                to="/"
                className={({ isActive }) => isActive ? "anchor active" : "anchor"}
                onClick={handleuser}
            >
                Logout
            </NavLink>}




        </nav >

    )
}

export default Navbar