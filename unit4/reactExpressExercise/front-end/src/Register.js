import React, { Component } from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    registerUser = (event) => {
        event.preventDefault();
        this.props.registerUser(this.state.firstName, this.state.lastName);
    }

    render(){
        return(
            <div className="container">
                <h1>please register</h1>
                <form onSubmit={this.registerUser} className="reg-form">
                    <input type="text" class="new-user" placeholder="firstName" value={this.state.firstName} />
                    <input type="text" class="new-user" placeholder="lastName" value={this.state.lastName} />
                    {/* for future iteration: */}
                    {/* <input type="file" name="imageToUpload" /> */}
                    <div className="buttonContainer">
                        <button id="submitButton" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register 