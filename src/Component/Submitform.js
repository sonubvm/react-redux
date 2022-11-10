import React, { Component } from "react";
import {useNavigate} from "react-router-dom";

class Submit extends Component{
    state = {
       name:"",
       email:"",
       password:"",
       languages:[],
       gender:""
    }
    users = [];
     id = null;
handlechange =(e) =>{
    console.log('hii')
    let {name} = e.target;
    let value = e.target.value;
    if(name == "lang")
    {
        if(e.target.checked)
        {
            this.state.languages.push(value);
            this.setState({[name]:value});
        }
        else{
           let a =  this.state.languages.indexOf(e.target.value);
            this.state.languages.splice(a , 1);
            this.setState({[name]:value});
        }
    }
    else{
        this.setState({[name]:value});
    }
    }
handleSubmitValue = (e) => {
e.preventDefault();
    if(this.state.id === null || this.state.id == undefined)
    {
        this.users.push(this.state)
        this.setState({...this.users,users:this.state});
    }
    else 
    {
        let a = this.state.id;
        this.users[a] = this.state;
        this.setState({...this.users});
        this.setState({id:null});
    }
    this.setState({name:"",
    email:"",
    password:"",
    languages:[],
    gender:""});
    
}
handleEditChange = (e, index) => {

    this.setState(this.users[index]);
    this.setState({id:index});  
}
handleDeleteChange = (e, index) => {debugger
    this.users.splice(index, 1);
    this.setState({...this.state.users});
    this.setState({name:"",
    email:"",
    password:"",
    languages:[],
    gender:""});
}
    render()
    {
        const data = {
            borderStyle: "solid",
            padding: "20px",
            margin: "auto",
            width: "70%",
            textAlign: "center",
            tableCollapse: "collapse"
        }
        const mystyle = {
            borderStyle:"Solid",
            width:"250px",
            marginLeft:"650px",
            padding:"20px"
        }
        return(
            <>
            <form style={mystyle}>
                Name : <input type="text" name="name" onChange={(e)=>{this.handlechange(e)}} value = {this.state.name} required/><br />
                Email  :  <input type="email" name="email" onChange={(e)=>{this.handlechange(e)}} value = {this.state.email}/><br />
                Pass : <input type="password" name="password" onChange={(e)=>{this.handlechange(e)}} value = {this.state.password}/><br />
                Languages : <input type="checkbox" name="lang" value="Eng" onChange={(e)=>{this.handlechange(e)}} checked={this.state.languages.includes("Eng")}/>Eng 
                            <input type="checkbox" name="lang" value = "Hindi" onChange={(e)=>{this.handlechange(e)}} checked={this.state.languages.includes("Hindi")}/>Hindi<br/>
                Gender : <input type="radio" name="gender" value = "Female" onChange={(e)=>{this.handlechange(e)}} checked={this.state.gender=="Female"}/>Female 
                        <input type="radio" name="gender" value = "Male" onChange={(e)=>{this.handlechange(e)}} checked={this.state.gender=="Male"}/>Male<br />
                <button style={{border:"1px Solid"}} onClick={(e) => this.handleSubmitValue(e)}>Submit</button>
            </form>
            <div>
                    <table style={data}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Password</th>
                                <th>Gender</th>
                                <th>Languages</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.users && this.users.length > 0 && this.users.map((item, index) => (

                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.gender}</td>
                            <td>{item.languages}</td>
                            <td><button onClick={(e) => this.handleEditChange(e, index)}>Edit</button>
                                        <button onClick={(e) => this.handleDeleteChange(e, index)}>Delete</button></td>
                        </tr>
                        ))}
                        </tbody> 
                    </table>
                </div>
            </>
        );
    }
}
export default Submit;