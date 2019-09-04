import React from "react";
import './style.css';
import titleImage from '../Title/image/titleImage.png';
import API from "../../utils/API";
import Auth from "../../utils/Auth";

class Login extends React.Component {

    state = {
        password: "",
        email: "",
        username: ""
    };

    handleChange = (event) => { 
        const {name, value} = event.target;
        console.log(name, value)
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('here is value ' + this.state.password + this.state.email);
        API.loginUser(this.state).then(res => {
            Auth.setToken(res.data.token);
            this.setState({username: res.data.username});
            this.props.history.push({pathname: '/discover', state: {username: res.data.username}});
        }).catch(err => console.log(err));

    }

    render() {
        return (
        
        <div id="loginBackground">
                {/* <img className="responsive" id="loginBPicture" src={titleImage} alt="" />  */}
            <div className="front" id="containerLogin">
                <h1>login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="input" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/><br/>
                    <input id="input" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/><br/>
                    <button className="astext" type="submit" >Submit</button>
                </form>
            </div>
        </div>

        );
    }

} 

export default Login;