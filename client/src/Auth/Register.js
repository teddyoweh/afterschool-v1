import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//UI 
import { Box, Button, TextField, Typography } from "@material-ui/core";

export class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    success: false,
    error: false,
  };

  onSignup = (e) => {
    e.preventDefault();

    const { email, password, first_name, last_name } = this.state;

    axios({
      url: "/auth/register",
      method: "POST",
      data: { email, password, first_name, last_name },
    })
      .then((res) => {
        window.localStorage.setItem("isAuthenticated", true);
        if (res.status === 200) {
          this.setState({ success: true, error: false });
          this.props.history.push("/");
        }
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message, success: false });
      });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
 
     <>
 
      <div className="auth-form">
          <form class="row g-3 w-50" onSubmit={this.onSignup}>
            {success && "You've registered in successfully"}
            
            {error !==''&& <div class="alert alert-danger" role="alert">{error}</div>
         }

{error}
          
       
              
                      <div class="form-floating mb-3">
        <input type="text" name="first_name"
                          onChange={this.onChange}
                          required  class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" name="last_name"
                          onChange={this.onChange}
                          required  class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Last Name</label>
      </div>
                      <div class="form-floating mb-3">
        <input type="email"       name="email"
                        onChange={this.onChange}
                        required class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email</label>
        
        <div  class="form-text">
      Must be a @go.tarleton.edu or @tarleton.edu email
      </div>
      </div>
                
           

           
            
            <div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword"  name="password"
                  onChange={this.onChange}
                  required placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

          
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  
      
          </form>
          </div>
          </>
        
    );
  }
}

export default RegisterScreen;
