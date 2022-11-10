import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


const ul = {
   
    display:"flex",
    listStyleType:"none",
    gap:"45px",
    backgroundColor:"#94E8F1",
    fontWeight:"600",
    fontSize:"20px",
}

const Layout = () => {
    return (
        <>
        <div className="container">
        <ul style={ul}>
        <li>
            <Link to = "Home" className="nav-link ">Home</Link>
        </li>
        <li>
            <Link to = "Views" className="nav-link">Views</Link>
        </li>
        <li>
            <Link to = "Submit" className="nav-link">Submit</Link>
        </li>
        <li>
            <Link to="Calculator" className="nav-link">Calculator</Link>
        </li>
        <li>
            <Link to="CRedux" className="nav-link">Form</Link>
        </li>
    </ul>
        </div>
    <Outlet />
        </>
    );
}
export default Layout;