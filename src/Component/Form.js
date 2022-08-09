import React, { useEffect, useState } from "react";

const Form = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    const [users, setUsers] = useState([
        { name: 'Sonu', email: 'sonu@gmail.com', password: '1234', gender: 'female', city: 'surat', phoneno: '7896541230', languages: ['Eng', 'Hindi', 'Guj'] }
    ]);
    const [id, setId] = useState(null);
    const mystyle = {
        border: "3px solid black",
        width: "288px",
        marginLeft: "600px",
        borderRadius: "10px",
    };
    const data = {
        borderStyle: "solid",
        padding: "20px",
        margin: "auto",
        width: "70%",
        textAlign: "center",
        tableCollapse: "collapse"
    }
    const handleChange = (e) => {
        let { name } = e.target;
        let value = e.target.value;
        if (name == "languages") {
            if (e.target.checked) {
                user.languages.push(value);
                setUser({ ...user, languages: user.languages })
            }
            else {
                let a = user.languages.indexOf(value);
                user.languages.splice(a, 1);
            }
            setUser({ ...user, [name]: user.languages })
        }
        else {
            setUser({ ...user, [name]: value })
        }
    }
    const handlesubmitvalue = (e) => {
        e.preventDefault();
        if (id === null) {
            setUsers([...users, user]);
        }
        else {
            users[id] = user;
            setUsers([...users]);
        }
        setUser({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    }
    const handleEditChange = (e, index) => {
        setUser(users[index]);
        setId(index);
    }
    const handleDeleteChange = (e, index) => {
        users.splice(index, 1);
        setUsers([...users]);
    }
    return (
        <>
            <h1></h1>
            <h1 align="Center" >Form Page</h1>
            <div>
                <form onSubmit={(e) => handlesubmitvalue(e)}>
                    <table className="table" align="center" style={mystyle}>
                        <tr>
                            <td>Name : </td>
                            <td><input type="text" name='name' value={user.name} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td>Phone No : </td>
                            <td><input type="number" name='phoneno' value={user.phoneno} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td>Email Id :</td>
                            <td><input type="email" name='email' value={user.email} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td>PassWord:</td>
                            <td><input type="password" name='password' value={user.password} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <td>City : </td>
                            <td><select name='city' value={user.city} onChange={(e) => handleChange(e)}>
                                <option>Surat</option>
                                <option>Ahmedabad</option>
                                <option>Rajkot</option>
                                <option>Valsad</option>
                                <option>Navsari</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Languages :</td>
                            <td><input type="checkbox" name="languages" value="Eng" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Eng")} />Eng
                                <input type="checkbox" name="languages" value="Hindi" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Hindi")} />Hindi
                                <input type="checkbox" name="languages" value="Guj" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Guj")} />Gujarati</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td><input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} checked={user?.gender == "female"} />Female
                                <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} checked={user?.gender == "male"} />Male</td>
                        </tr>
                        <tr>
                            <button>Submit</button>
                        </tr>
                    </table>
                </form>
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
                                    <td><button onClick={(e) => handleEditChange(e, index)}>Edit</button>
                                        <button onClick={(e) => handleDeleteChange(e, index)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Form;    