import React, {useState, useEffect} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { editUser, deleteUser, addUser } from "./action";
import 'bootstrap/dist/css/bootstrap.css';
const Views = () => {

    const [id, setId] = useState(null);
    const [newuser, setnewusers] = useState({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //let user = JSON.parse(localStorage.getItem('users'));
    const reduxdata = useSelector((state)=> state.reducer.users);
    console.log("data", reduxdata);
    useEffect(()=>{
        if(reduxdata){
            localStorage.setItem("reduxdata", JSON.stringify(reduxdata));
            console.log("reduxdata",reduxdata);
        }
    },[reduxdata]);
    const handleEditChange = (e, index) => {
        let b = reduxdata[index];
        setnewusers({b});
        localStorage.setItem("newuser", JSON.stringify(b));
        dispatch(editUser(newuser));
        navigate("/Edit/"+ index);
    }
    const handleDeleteChange = (e, index) => {
        let data = JSON.parse(localStorage.getItem("reduxdata"))
        data.splice(index, 1);
        dispatch(deleteUser(data));
        localStorage.setItem("reduxdata", JSON.stringify(data));
    }
    const data = {
        borderStyle: "solid",
        padding: "20px",
        margin: "auto",
        width: "70%",
        textAlign: "center",
    }
    return (<>
        <div>
            <table style={data}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>City</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Phone No</th>
                        <th>Languages</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reduxdata && reduxdata.length > 0 && reduxdata.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>   
                            <td>{item.city}</td>
                            <td>{item.password}</td>
                            <td>{item.gender}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.languages}</td>
                            <td><button className="btn btn-info" onClick={(e)=>{handleEditChange(e, index)}}>Edit</button>
                            <button  className="btn btn-danger" onClick={(e) =>{handleDeleteChange(e, index)}}>Delete</button></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>)
}
export default Views;