import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <ul>
        <li>
            <Link to = "Home" >Home</Link>
        </li>
        <li>
            <Link to = "Views" >Views</Link>
        </li>
        <li>
            <Link to = "*" >Page</Link>
        </li>
        <li>
            <Link to = "Submit" >Submit</Link>
        </li>
        <li>
            <Link to = "Data" >Data</Link>
        </li>
    </ul>
    <Outlet />
        </>
    );
}
export default Layout;