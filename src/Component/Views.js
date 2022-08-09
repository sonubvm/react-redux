import React, {useState, useEffect} from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const Views = () => {
    const [users, setUsers] = useState([
        { name: 'Sonu', email: 'sonu@gmail.com', password: '1234', gender: 'female', city: 'surat', phoneno: '7896541230', languages: ['Eng', 'Hindi', 'Guj'] }
    ]);
    const [id, setId] = useState(null);
    const [newuser, setnewusers] = useState({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('users'));

    useEffect(()=>{
        if(user){
            setUsers(user);
        }
    },[user]);
    const handleEditChange = (e, index) => {
        let b  = users[index];
        setnewusers({b});
        localStorage.setItem("newuser", JSON.stringify(b));
        navigate("/Edit/"+ index, {newuser});
    }
    const handleDeleteChange = (e, index) => {
        user.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(user));
    }
    const data = {
        borderStyle: "solid",
        padding: "20px",
        margin: "auto",
        width: "70%",
        textAlign: "center"
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
                    {users && users.length > 0 && users.map((item, index) => (

                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.city}</td>
                            <td>{item.password}</td>
                            <td>{item.gender}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.languages}</td>
                            <td><button onClick={(e)=>{handleEditChange(e, index)}}>Edit</button></td>
                            <td><button onClick={(e)=>{handleDeleteChange(e, index)}}>Delete</button></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>)
}
export default Views;