import React from "react";
import './style.css';
import titleImage from '../Title/image/titleImage.png';
import API from "../../utils/API";
import Auth from "../../utils/Auth";

class SignUp extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",        
        password: "",
        email: "",
    };

    handleChange = (event) => { 
        const {name, value} = event.target;
        console.log(name, value)
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('here is value ' + this.state.value);
        API.createUser(this.state).then(res => {
            Auth.setToken(res.data.token);
            this.props.history.push({ pathname: '/discover', state: { username: res.data.username } });
        }).catch(err => console.log(err));

    }

    render() {
        return (
        
        <div id="loginBackground">
            <div className="front" id="containerLogin">
                <h1>Sign Up!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="input" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="name" /><br />
                    <input id="input" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="last name" /><br />
                    <input id="input" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" /><br />
                    <input id="input" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" /><br />
                    <input id="input" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" /><br />
                <button className="astext" type="submit">Submit</button>
            </form>
            </div>
        </div>
        );
    }
} 

export default SignUp;