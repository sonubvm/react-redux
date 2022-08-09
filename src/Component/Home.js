import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
const Home = () =>
{
    const [user, setUser] = useState({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    const [users, setUsers] = useState([
        { name: 'Sonu', email: 'sonu@gmail.com', password: '1234', gender: 'female', city: 'surat', phoneno: '7896541230', languages: ['Eng', 'Hindi', 'Guj'] }
    ]);
    const [newuser, setnewusers] = useState([{ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] }]);
    let {id} = useParams();
    const navigate = useNavigate();
    const mystyle = {
        border: "3px solid black",
        width: "288px",
        marginLeft: "600px",
        borderRadius: "10px",
        padding : "10px"
    };
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
    const handlesubmitvalue = (e) => {debugger
        let allUsers = JSON.parse(localStorage.getItem('users'));
        e.preventDefault();
        if(id == undefined)
        {
            allUsers.push(user);
            localStorage.setItem("users", JSON.stringify(allUsers));
            console.log(allUsers);
        }
        else {
            allUsers[id] = user;
                localStorage.setItem("users", JSON.stringify(allUsers));
                console.log(allUsers);
        }
        setUser({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
        navigate('/Views', {users});
    }
    let a = JSON.parse(localStorage.getItem('newuser'));
    useEffect(()=>{
        if(id)
        {
            setUser(a);
        }
    },[]);
    return (<>
        <form onSubmit={(e) => handlesubmitvalue(e)}>
                    <table className="table" align="center" style={mystyle}>
                        
                            Name : 
                            <input type="text" name='name' value={user.name} onChange={(e) => handleChange(e)} /><br/>
                        
                        
                            Phone No : 
                            <input type="number" name='phoneno' value={user.phoneno} onChange={(e) => handleChange(e)} /><br/>
                        
                        
                            Email Id :
                            <input type="email" name='email' value={user.email} onChange={(e) => handleChange(e)} /><br/>
                        
                        
                            PassWord:
                            <input type="password" name='password' value={user.password} onChange={(e) => handleChange(e)} /><br/>
                        
                        
                            City : 
                            <select name='city' value={user.city} onChange={(e) => handleChange(e)}>
                                <option>Surat</option>
                                <option>Ahmedabad</option>
                                <option>Rajkot</option>
                                <option>Valsad</option>
                                <option>Navsari</option>
                            </select><br/>
                        
                        
                            Languages :
                            <input type="checkbox" name="languages" value="Eng" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Eng")} />Eng
                                <input type="checkbox" name="languages" value="Hindi" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Hindi")} />Hindi
                                <input type="checkbox" name="languages" value="Guj" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Guj")} />Gujarati<br/>
                        
                        
                            Gender:
                            <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} checked={user?.gender == "female"} />Female
                                <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} checked={user?.gender == "male"} />Male<br/>
                        
                        
                            <button>Submit</button>
                        
                    </table>
                </form>
    </>);
}
export default Home;