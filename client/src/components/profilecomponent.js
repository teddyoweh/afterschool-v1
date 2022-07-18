import React, { Component } from "react";
import 'boxicons';
import axios from "axios";
export class ProfileComponent extends Component {


/*


 _________  ______   ______   ______   __  __    
/________/\/_____/\ /_____/\ /_____/\ /_/\/_/\   
\__.::.__\/\::::_\/_\:::_ \ \\:::_ \ \\ \ \ \ \  
   \::\ \   \:\/___/\\:\ \ \ \\:\ \ \ \\:\_\ \ \ 
    \::\ \   \::___\/_\:\ \ \ \\:\ \ \ \\::::_\/ 
     \::\ \   \:\____/\\:\/.:| |\:\/.:| | \::\ \ 
      \__\/    \_____\/ \____/_/ \____/_/  \__\/ 
                                                 



*/
 


    
/* Hope theres no bugs */

state = {
 
    first_name: this.props.firstName,
    last_name:this.props.lastName,
    snapchat:this.props.snapchat,
    instagram:  this.props.instagram,
    linkedin: this.props.linkedin,
    twitter: this.props.twitter,
    gender: this.props.gender,
    success: false,
    error: false,
    updatemsg: "",
  };

  onUpdate = (e) => {
    e.preventDefault();

    const { first_name, last_name,snapchat ,
    instagram,
    linkedin,
    twitter,
    gender} = this.state;

    axios({
      url: "/user/updateProfile",
      method: "POST",
      data: { first_name, last_name,snapchat ,
        instagram,
        linkedin,
        twitter,
        gender},
    })
      .then((res) => {
    
        if (res.status === 200) {
          this.setState({ success: true, error: false,updatemsg:'Update Successfull' });
         
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
       
   
      return (
         
       
 
<div className='profile-container container'>
    <div className="profile-content">
        <div className='profile-header'>
        <div className="profile-img">{this.props.img==='' && <label>{this.props.f+ this.props.l}</label>}<div className="change-img">Update</div></div>
        <div className="profile-edit"> <button type="button" class="btn btn-secondary">View</button><button onClick={this.onUpdate} type="button" class="btn btn-secondary">Save</button></div>
        </div>
        <div className='profile-body'>
            <div className='profile-body-e'>
                <div className='profile-body-e-head'>
                    <label>Personal Details</label>
                    <span></span>
                </div>
                <div className='profile-body-e-body'>
                <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name='first_name'  onChange={this.onChange}  value={this.state.first_name}/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  name='last_name'  onChange={this.onChange} value={this.state.last_name}/>
    </div>
  </div>
                <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" disabled value={this.props.email}/>
    </div>
  </div>
  
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
    <div class="col-sm-10">
      <div class="form-check">
      {this.props.gender==='male' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male"  checked/>}
          {this.props.gender!=='male' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male"  />}
        <label class="form-check-label" for="gridRadios1">
      Male
        </label>
      </div>
      <div class="form-check">
      {this.props.gender==='female' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" checked/>}
              {this.props.gender!=='female' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" />}
        <label class="form-check-label" for="gridRadios2">
         Female        </label>
      </div>
      <div class="form-check ">
      {this.props.gender==='nonb' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="nonb"  checked/>}
              {this.props.gender!=='nonb' &&
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="nonb"  />}
        <label class="form-check-label" for="gridRadios3">
      Non-Binary
        </label>
      </div>
    </div>
  </fieldset>
 
                </div>
                </div>
                <div className='profile-body-e'>
                <div className='profile-body-e-head'>
                    <label>Social Media Details</label>
                    <span></span>
                </div>
                <div className='profile-body-e-body social-media-details'>
                <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label"><img src="https://img.icons8.com/color/24/000000/linkedin.png"/> Linkedin Profile Url</label>
    <div class="col-sm-10">
      <input type="url" class="form-control" id="inputEmail3" name='linkedin' onChange={this.onChange} value={this.state.linkedin}/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label"><img src="https://img.icons8.com/fluency/24/000000/snapchat.png"/> Snapchat Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" name='snapchat'  onChange={this.onChange} value={this.state.snapchat}/>
    </div>
  </div>
                <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label"><img src="https://img.icons8.com/color/24/000000/twitter--v1.png"/> Twitter Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" name='twitter ' onChange={this.onChange} value={this.state.twitter}/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label"><img src="https://img.icons8.com/fluency/24/000000/instagram-new.png"/> Instagram Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"   name='instagram'  onChange={this.onChange} value={this.state.instagram}/>
    </div>
  </div>
 
 
                </div>
                </div>
            </div>
    </div>
</div>

     
      );
    }}
   
  
  export default ProfileComponent;
  