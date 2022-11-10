import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { addUser } from "./action";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () =>
{
    const [user, setUser] = useState({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
    const [users, setUsers] = useState([
        { name: 'Sonu', email: 'sonu@gmail.com', password: '1234', gender: 'female', city: 'surat', phoneno: '7896541230', languages: ['Eng', 'Hindi', 'Guj'] }
    ]);
    const [newuser, setnewusers] = useState([{ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] }]);
    let {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reduxdata = useSelector((state)=> state.reducer.users);
    const homeformstyle = {
       width:"600px",
       marginLeft:"300px"
       
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
        let allUsers =  JSON.parse(localStorage.getItem('reduxdata'));
        e.preventDefault();
        if(id == undefined)
        {
            allUsers.push(user);
            localStorage.setItem("reduxdata", JSON.stringify(allUsers));
        }
        else {
            allUsers[id] = user;
            localStorage.setItem("reduxdata", JSON.stringify(allUsers));
        }
        setUser({ name: '', email: '', password: '', gender: '', city: '', phoneno: '', languages: [] });
        let all =  JSON.parse(localStorage.getItem('reduxdata'));
        dispatch(addUser(all));
        navigate('/Views');
    } 
    useEffect(()=>{
        if(id)
        {
            let a = JSON.parse(localStorage.getItem('newuser'));
            setUser(a);
        }
    },[]);
    return (<>
        <form>
                    <div className="container">
                    {/* <table className="table" align="center" style={mystyle}> */}
                    <h1 style={{textAlign:"Center"}}>Registration</h1><hr></hr>
                        <form className="form" style={homeformstyle}>
                        <label className="form-label "> Name : </label>
                         <input type="text" className="form-control" name='name' value={user.name} onChange={(e) => handleChange(e)} /><br/>
                     

                         <label className="form-label "> Phone no : </label>
                         <input type="number" className="form-control" name='phoneno' value={user.phoneno} onChange={(e) => handleChange(e)} /><br/>
                     
                     
                         <label className="form-label "> Eamil Id : </label>
                         <input type="email"  className="form-control" name='email' value={user.email} onChange={(e) => handleChange(e)} /><br/>
                     
                     
                         <label className="form-label "> Password : </label>
                         <input type="password" className="form-control" name='password' value={user.password} onChange={(e) => handleChange(e)} /><br/>
                     
                     
                         <label className="form-label "> City : </label><br />
                         <select name='city' value={user.city} onChange={(e) => handleChange(e)} className="form-control">
                             <option>Surat</option>
                             <option>Ahmedabad</option>
                             <option>Rajkot</option>
                             <option>Valsad</option>
                             <option>Navsari</option>
                         </select><br/>
                     
                     
                         <label className="form-label "> Languages : </label><br />
                         <input type="checkbox" name="languages"className="form-check-input" value="Eng" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Eng")} /><label className="form-label "> Eng</label>
                             <input type="checkbox" name="languages"className="form-check-input" value="Hindi" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Hindi")} /><label className="form-label "> Hindi</label>
                             <input type="checkbox" name="languages" className="form-check-input"value="Guj" onChange={(e) => handleChange(e)} checked={user?.languages.includes("Guj")} /><label className="form-label "> Guj</label><br/>
                     
                     
                             <label className="form-label "> Gender : </label><br />
                             <input type="radio" className="form-check-input" name="gender" value="female" onChange={(e) => handleChange(e)} checked={user?.gender == "female"} /><label className="form-label "> Female</label>
                             <input type="radio" className="form-check-input" name="gender" value="male" onChange={(e) => handleChange(e)} checked={user?.gender == "male"} /><label className="form-label "> Male</label><br/>
                     
                         <button className="btn btn-info" onClick={(e) => handlesubmitvalue(e)}>Submit</button>
                         
                         </form>
                    </div>
                </form>
    </>);
}
export default Home;