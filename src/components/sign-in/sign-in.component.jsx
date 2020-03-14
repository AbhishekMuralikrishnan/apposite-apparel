import React from "react";

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

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
                    <FormInput name="email" value={this.state.email} type="email" required handleChange= {this.handleChange} label="Email"/>
                    {/* <label>Email</label> */}
                    <FormInput name="password" value={this.state.password} type="password" required handleChange= {this.handleChange} label = "Password"/>
                    {/* <label>Password</label> */}
                    <div class="buttons">
                        <CustomButton type="Submit"> Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;