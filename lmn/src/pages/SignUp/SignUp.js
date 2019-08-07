import React from "react";
import '../Login/style.css';
import titleImage from '../Title/image/titleImage.png';

class SignUp extends React.Component {

    state = {
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
        alert('here is value ' + this.state.value);
 
    }

    render() {
        return (
        
          <div id="loginBackground">
            {/* <div style={{backgroundImage: ${titleImage} }} ></div> */}
            {/* <div id="imageBackround"> */}
                <img class="responsive" id="loginBPicture" src={titleImage} alt="" /> 
            {/* </div> */}
            <div class="front" id="containerLogin">
            {/* <img class="responsive" id="loginBPicture" src={titleImage} alt="" /> */}
                <h1>Login !</h1>
            <form onSumbit={this.handleSubmit}>
            <input id="input" type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/><br/>
                    <input id="input" type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/><br/>
                    <button class="astext" type="submit" >Submit</button>
            </form>
            </div>
          </div>

        );
    }

} 

export default SignUp;