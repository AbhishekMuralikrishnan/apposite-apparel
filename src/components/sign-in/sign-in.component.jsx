import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "asdsad@gam.com",
            password: "asdasafsdafe"
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""})
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name] : value});
    }

    render() {
        console.log("Render is called")
        console.log(this.state)
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit= {this.handleSubmit}>
                    <input name="email" value={this.state.email} type="email" required onChange= {this.handleChange}/>
                    <label>Email</label>
                    <input name="password" value={this.state.password} type="password" required onChange= {this.handleChange}/>
                    <label>Password</label>
                    <input type="Submit" defaultValue="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;