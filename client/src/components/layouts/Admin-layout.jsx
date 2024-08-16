import { NavLink, Outlet,Navigate } from "react-router-dom"
import { FaUser,FaHome,FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout=()=>{
    const {user,loading}=useAuth()

    if(loading){
        return <h1>Loading......</h1>
    }

    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/user"><FaUser/>users</NavLink></li>
                        <li><NavLink to="/admin/contact"><FaMessage/>Contacts</NavLink></li>
                        <li><NavLink to="/admin/service"><FaRegListAlt/>services</NavLink></li>
                        <li><NavLink to="/admin"><FaHome/>home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
    )
}

