import { NavLink } from "react-router-dom"

export const Error=()=>{
    return <>
    <section id="error-page">

        <div className="content">
            <h2 className="header">
                404
            </h2>
            <h4>Sorry,Page Not Found</h4>
            <p>
                Opps! it seems like the page you are trying to visit is does't exist.
            </p>
            <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/contact">contact us</NavLink>
            </div>
        </div>

    </section>
    </>
}