import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./action";
import 'bootstrap/dist/css/bootstrap.css';
import userEvent from "@testing-library/user-event";

const ApiForm = () => {
    const [user, setUser] = useState({ name: "", username: "", phone: "", email: "" });
    const [users, setUsers] = useState();
    const [id, setId] = useState();
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((json) => {
                setUsers([...json])
            })
    }
    const handledelete = (id) => {
        console.log("id", id)
        fetch("https://jsonplaceholder.typicode.com/users/" + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp);
                getUsers();
            })
        })

    }
    const handleedit = (id) => {
        let a = users[id];
        console.log("user", a)
        setUser({ name: a.name, email: a.email, phone: a.phone, username: a.username })
        setId(id + 1)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("edit",id)
        console.log("user",user
        )
        if(id==undefined)
        {
            fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(user)
            
        }).then((result) => {result.json()
            .then((body) => {
                setUsers([...users, user])
                console.warn("resp",body);
                getUsers();
            })
        })
        }
        else{
            fetch("https://jsonplaceholder.typicode.com/users/"+id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(user)
        }).then((result) => {result.json()
            .then((resp) => {
                console.warn("resp",resp);
                getUsers();
            })
        })
        }
    }
    const handleOnChange = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value })
        console.log("value", e.target.value)
    }
    return (<>
        <div className="container">
            <form className="form">
                <label className="form-label "> Name : </label>
                <input type="text" className="form-control" name='name' value={user.name} onChange={(e) => handleOnChange(e)} /><br />
                <label className="form-label "> UserName : </label>
                <input type="text" className="form-control" name='username' value={user.username} onChange={(e) => handleOnChange(e)} /><br />
                <label className="form-label "> Phone no : </label>
                <input type="text" className="form-control" name='phone' value={user.phone} onChange={(e) => handleOnChange(e)} /><br />
                <label className="form-label "> Eamil Id : </label>
                <input type="email" className="form-control" name='email' value={user.email} onChange={(e) => handleOnChange(e)} /><br />
                <button className="btn btn-info" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email Id</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 && users.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                            <td><button onClick={() => handleedit(index)}>Edit</button></td>
                            <td><button type="button" onClick={() => handledelete(item.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>);
}
export default ApiForm;