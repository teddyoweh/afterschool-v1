import React, { Component } from "react";
import axios from "axios";
import Siderbar from "../components/sidebar";
import SettingsComponent from "../components/Settingscomponent";
import ProfileComponent from "../components/profilecomponent";
export class Settings extends Component {


 

 
  state = {
    first_name: "",
    last_name: "",
    userType: "",
    email: "",
    password: "",
    gender: "",
    snapchat: "",
    instagram: "",
    linkedin: "",
    twitter: "",


  };

  componentDidMount() {
    axios
      .get("/user/getDetails")
      .then(({ data: {   first_name, 
        last_name,
        userType,
        email,  
        password,
        gender,
        snapchat,
        instagram,
        linkedin,
        twitter, } }) => {
        this.setState({   first_name, 
          last_name,
          userType,
          email,  
          password,
          gender,
          snapchat,
          instagram,
          linkedin,
          twitter, });
      })
      .catch((err) => console.log(err));
  }

  render() {
 
    const {   first_name, 
      last_name,
      userType,
      email,  
      password,
      gender,
      snapchat,
      instagram,
      linkedin,
      twitter, } = this.state;
 
    return (
      <div>
        <div className='tedx-container'>
        <Siderbar active='settings' img='' f={first_name[0]} l={last_name[0]} />
      
        <SettingsComponent />
        <ProfileComponent img=''
        email={email}
        password={password}
        gender={gender}
        snapchat={snapchat}
        instagram={instagram}
        linkedin={linkedin}
        twitter={twitter}
        firstName={first_name} 
        lastName={last_name}
        userType={userType}
         f={first_name[0]}
          l={last_name[0]}/>
        </div>
      
      </div>
    );
  }}
 

export default Settings;

/*
       &
      .-"`"-.
     /       \
     |   __  _|
     |  /  \/ \
    WW  \_o/_o/
    (        _)
     |   .----\
     ;  | '----'
      \__'--;`
jgs   |___/\|
*/