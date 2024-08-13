import { NavLink, Outlet } from "react-router-dom"
import { FaUser,FaHome,FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout=()=>{
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

