import React, { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux';
import { addUser, deleteUser, handledeleteUser,loadUser } from "./action";
import 'bootstrap/dist/css/bootstrap.css';


export function Main(props) {
   // console.log('props',props)
const [user, setUser] =  useState({name:"",phone:"",Languages:[],gender:""})
const [users, setUsers] = useState(props.usersData)
console.log('users',users)
useEffect(() => {

    setUsers(props.usersData)
},[props.usersData])

const handleinputvalue = (e) => {
    console.log('value',e.target.value)
    let {name}= e.target;
    if(name == "Languages")
    {
        if(e.target.checked)
        {
            user.Languages.push(e.target.value);
            setUser({...user,[name]:user.Languages});
            // console.log("languages", this.user)
        }
        else{
           let index =  user.Languages.indexOf(e.target.value);
           user.Languages.splice(index, 1);
           setUser({...user,[name]:user.Languages})
        }
    }
    else{
        setUser({...user,[name]:e.target.value});
    }
}

const handleSubmit = () => {
    console.log("submit")
    users.push(user);
    props.handleSubmitvalue(users)
    props.loadData()
}
    return(
        <>
<div className="container">
                <form >
                    Name: <input type="text" name="name" onChange={(e)=>{handleinputvalue(e)}}/><br />
                    Ph.no: <input type="number" name = "phone" onChange={(e)=>{handleinputvalue(e)}}/><br />
                    Languages:<input type="checkbox" name="Languages" value="Eng" onChange={(e)=>{handleinputvalue(e)}}/>Eng 
                    <input type="checkbox" name="Languages" value="Guj" onChange={(e)=>{handleinputvalue(e)}}/>Guj<br />
                    Gender:<input type="radio" name="gender" value="Female" onChange={(e)=>{handleinputvalue(e)}}/>Female 
                    <input type="radio" name="gender" value="Male" onChange={(e)=>{handleinputvalue(e)}}/>Male<br />
                    <button type="button" onClick={()=> handleSubmit()
                    }>Submit</button>
                    
                </form>
                </div>
                <div>
                    <table border="1px solid">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ph.no</th>
                            <th>Languages</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                        </thead> 
                        <tbody>
                            {users && users.map((item,index)=>(
                                <tr key ={index}>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.Languages}</td>
                                    <td>{item.gender}</td>
                                    <td><button>Edit</button></td>
                                    <td><button type='button' onClick={() => props.handledelete(index)}>Delete</button></td>
                                </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
        </>
    )
}

function mapStateToProps(state) {
    console.log('state',state.reducer.users)
    return {
        usersData : state.reducer.users 
    }
}
const mapDispatchToProps = (dispatch) =>{
   return {
    handleSubmitvalue: (user) => dispatch(addUser(user)),
    handledelete: (id) => dispatch(deleteUser(id)),
    loadData: () => dispatch(loadUser())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)