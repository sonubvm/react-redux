import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser, loadUser } from "./action";
import 'bootstrap/dist/css/bootstrap.css';

class CRedux extends Component {
    constructor(props) {
        super(props)
        console.log("users", this.props)
        this.state = {
            user: { name: "", phone: "", Languages: [], gender: "" },
            users: this.props.usersData,
            id: null
        }
    }
    componentDidMount() {  
        this.props.loadUser();  
      }  
      
    handledelete(id) {debugger
        this.state.users.splice(id, 1);
        this.setState({users:this.state.users});
        this.props.handledelete(this.state.users);
    }
    handleinputvalue(e) {
        let { name } = e.target;
        if (name == "Languages") {
            if (e.target.checked) {
                this.state.user.Languages.push(e.target.value);
                this.setState({ user: { ...this.state.user, [name]: this.state.user.Languages } });
            }
            else {
                let index = this.user.Languages.indexOf(e.target.value);
                this.user.Languages.splice(index, 1);
                this.setState({ user: { ...this.state.user, [name]: this.user.Languages } })
            }
        }
        else {
            this.setState({ user: { ...this.state.user, [name]: e.target.value } });
        }
    }
    handleSumbit(e) {
        e.preventDefault();
        if (this.state.id == null) {
            this.state.users.push(this.state.user);
            this.setState([{ ...this.users, users: this.state.user }])
            this.props.handleSubmitvalue(this.state.users)
        }
        else {
            this.state.users[this.state.id] = this.state.user;
            this.setState([{ ...this.users, users: this.state.user }])
            this.props.handleSubmitvalue(this.state.users)
        }
        this.setState(
            { user: { name: "", phone: "", Languages: [], gender: "" } });
        this.setState({ id: null });
    }
    handleEdit(id) {debugger
        this.setState({ id: id });
        // let a  = this.props.usersData;
        //this.setState({ user: this.props.usersData[id]})   
        this.setState({user:this.state.users[id]})
    }
    render() {
        const form = {
            width: "300px",
            border: "1px solid black",
            backgroundColor: "RGB (175,225,206)",
            padding: "20px",
            borderRadius: "25px"
        }
        const data = {
            borderStyle: "solid",
            padding: "20px",
            margin: "auto",
            textAlign: "center",
            width:"100%",
            backgroundColor:"pink"
        }   
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <form style={form}>
                        <label className="form-label ">Name : </label><br />
                        <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={(e) => this.handleinputvalue(e)} /><br />

                        <label className="form-label">PhoneNo : </label><br />
                        <input type="number" className="form-control" name="phone" value={this.state.user.phone} onChange={(e) => this.handleinputvalue(e)} /><br />
                        <label className="form-label">Languages : </label><br />
                        <input type="checkbox" className="form-check-input" name="Languages" onChange={(e) => this.handleinputvalue(e)} value="JAVA" checked={this.state.user.Languages.includes("JAVA")} />JAVA<br />
                        <input type="checkbox" className="form-check-input" name="Languages" onChange={(e) => this.handleinputvalue(e)} value="Python" checked={this.state.user.Languages.includes("Python")} />Python<br />
                        <input type="checkbox" className="form-check-input" name="Languages" onChange={(e) => this.handleinputvalue(e)} value="C#" checked={this.state.user.Languages.includes("C#")} />C#<br />
                        <label className="form-label">Gender : </label><br />
                        <input type="radio" className="form-check-input" name="gender" onChange={(e) => this.handleinputvalue(e)} value="Female" checked={this.state.user.gender == "Female"} />Female<br />
                        <input type="radio" className="form-check-input" name="gender" onChange={(e) => this.handleinputvalue(e)} value="Male" checked={this.state.user.gender == "Male"} />Male<br />
                        <button className="btn btn-success" onClick={(e) => this.handleSumbit(e)}>Submit</button>

                    </form>
                </div>
                <div className="col">
                    <table border="1px solid" style={data}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>PhoneNo</th>
                                <th>Languages</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users && this.state.users.length > 0 && this.state.users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.Languages}</td>
                                    <td>{item.gender}</td>
                                    <td><button className="btn btn-info" onClick={() => this.handleEdit(index)}>Edit</button>
                                    <button type='button' className="btn btn-danger" onClick={() => this.handledelete(index)}>Delete</button></td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
function mapStateToProps(state) {
    console.log('state', state.reducer.users)
    return {
        usersData: state.reducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmitvalue: (user) => dispatch(addUser(user)),
        handledelete: (user) => dispatch(deleteUser(user)),
        loadUser:()=>dispatch(loadUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CRedux);