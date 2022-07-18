import React, { Component } from "react";
import axios from "axios";
import Siderbar from "../components/sidebar";
import Assetbar from "../components/assetbar";

export class index extends Component {


 

 
  state = {
    first_name: "",
    last_name: "",
  };

  componentDidMount() {
    axios
      .get("/user/getDetails")
      .then(({ data: { first_name, last_name } }) => {
        this.setState({ first_name, last_name });
      })
      .catch((err) => console.log(err));
  }

  render() {
 
    const { first_name, last_name } = this.state;
 
    return (
      <div>
        <div className='tedx-container'>
        <Siderbar img='' f={first_name[0]} l={last_name[0]} />
        <Assetbar  />
        </div>
      
      </div>
    );
  }}
 

export default index;

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