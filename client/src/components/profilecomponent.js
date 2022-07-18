import React, {useState, Component } from "react";
import 'boxicons';
import axios from "axios";
export class ProfileComponent extends React.Component {


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
    email : this.props.email,
    snapchat:this.props.snapchat,
    instagram:  this.props.instagram,
    linkedin: this.props.linkedin,
    twitter: this.props.twitter,
    gender:'male', //this.props.gender,
    userType: this.props.userType,
    success: false,
    error: false,
    view:'edit',
    file:null,
    fileName:"",

    updatemsg: "",
    
  };  
  onUpdate = (e) => {
    e.preventDefault();

    const { first_name, last_name, email,snapchat ,
    instagram,
    linkedin,
    twitter,
    gender,userType} = this.state;
 
    axios({
      url: "/user/updateProfile",
      method: "POST",
      data: {first_name, last_name, email, snapchat ,
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
   
 saveFile = (e) => {
    console.log(e.target.files)
        this.setState({file:e.target.files[0]});
        this.setState({fileName:e.target.files[0].name});
       
      };
 
       uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("recfile", this.state.file);
        formData.append("fileName", this.state.fileName);
        console.log(formData);
        try {
          const res = await axios.post(
            "http://localhost:9000/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
 
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error: false,
      success: false,
    });
  };
  handleView1= () => {
    this.setState({
      view:'view',
    
    });
  };
  handleView2= () => {
    this.setState({
      view:'edit',
    
    });
  };
    render() {
     const firstName = this.state.first_name;
  

    
   
      return (
         
         
 
<div className='profile-container container'>
    {this.state.view==='edit' &&
    <div className="profile-content">
        <div className='profile-header'>
        <div className="profile-img">{this.props.img!=='' && <label>{this.props.f+ this.props.l} </label>} <img alt="not fount" width={"250px"} src={window.URL.createObjectURL(new Blob([this.state.selectedImage], {type: "image/png"}))}/><div className="change-img">
        <input name='mypic' type="file" onChange={this.saveFile} />
          <button onClick={this.uploadFile}>Upload</button></div></div>
        <div className="profile-edit"> <button type="button"  onClick={  this.handleView1} className="btn btn-secondary">View</button><button onClick={this.onUpdate} type="button" className="btn btn-secondary">Save</button></div>
        </div>
        <div className='profile-body'>
            <div className='profile-body-e'>
                <div className='profile-body-e-head'>
                    <label>Personal Details</label>
                    <span></span>
                </div>
                <div className='profile-body-e-body'>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-10">
    {this.state.first_name !== '' &&    <input type="text" className="form-control" name='first_name'  onChange={this.onChange}  value={this.state.first_name }/>}
    {this.state.first_name === '' &&    <input type="text" className="form-control" name='first_name'  onChange={this.onChange}  value={this.props.firstName }/>}
   
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control"  name='last_name'  onChange={this.onChange} value={this.state.last_name}/>
    </div>
  </div>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" disabled value={this.state.email}/>
    </div>
  </div>
  
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
    <div className="col-sm-10">
      <div className="form-check">
      {this.state.gender==='male' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male"  checked/>}
          {this.state.gender!=='male' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="male"  />}
        <label className="form-check-label" for="gridRadios1">
      Male
        </label>
      </div>
      <div className="form-check">
      {this.state.gender==='female' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" checked/>}
              {this.state.gender!=='female' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="female" />}
        <label className="form-check-label" for="gridRadios2">
         Female        </label>
      </div>
      <div className="form-check ">
      {this.state.gender==='nonb' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="nonb"  checked/>}
              {this.state.gender!=='nonb' &&
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="nonb"  />}
        <label className="form-check-label" for="gridRadios3">
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
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/color/24/000000/linkedin.png"/> Linkedin Profile Url</label>
    <div className="col-sm-10">
      <input type="url" className="form-control" id="inputEmail3" name='linkedin' onChange={this.onChange} value={this.state.linkedin}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/fluency/24/000000/snapchat.png"/> Snapchat Username</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name='snapchat'  onChange={this.onChange} value={this.state.snapchat}/>
    </div>
  </div>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/color/24/000000/twitter--v1.png"/> Twitter Username</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name='twitter' onChange={this.onChange} value={this.state.twitter}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/fluency/24/000000/instagram-new.png"/> Instagram Username</label>
    <div className="col-sm-10">
      <input type="text" className="form-control"   name='instagram'  onChange={this.onChange} value={this.state.instagram}/>
    </div>
  </div>
 
 
                </div>
                </div>
            </div>
    </div>}
    {this.state.view==='view' &&
    <div className="profile-content">
        <div className='profile-header'>
        <div className="profile-img">{this.props.img==='' && <label>{this.props.f+ this.props.l}</label>} </div>
        <div className="profile-edit"> <button type="button" className="btn btn-secondary">Viewing</button><button onClick={  this.handleView2} type="button" className="btn btn-secondary">Edit</button></div>
        </div>
        <div className='profile-body'>
            <div className='profile-body-e'>
                <div className='profile-body-e-head'>
                    <label>Personal Details</label>
                    <span></span>
                </div>
                <div className='profile-body-e-body'>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">First Name</label>
    <div className="col-sm-10">
  
<label>{this.props.firstName }</label>
   
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Last Name</label>
    <div className="col-sm-10">
    <label>{this.props.lastName }</label>
    </div>
  </div>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <label><a href={'mailto:'+this.props.email }>{this.props.email }</a></label>
    </div>
  </div>
  
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
    <div className="col-sm-10">
    <label>{this.props.gender }</label>
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
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/color/24/000000/linkedin.png"/> Linkedin</label>
    <div className="col-sm-10">
      <input type="url" className="form-control" id="inputEmail3" name='linkedin' onChange={this.onChange} value={this.state.linkedin}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/fluency/24/000000/snapchat.png"/> Snapchat</label>
    <div className="col-sm-10">
 
      <label><a href={'https://www.snapchat.com/add/'+this.props.snapchat}>{this.props.snapchat}</a></label>
    </div>
  </div>
                <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/color/24/000000/twitter--v1.png"/> Twitter</label>
    <div className="col-sm-10">
    <label><a href={'https://www.twitter.com/'+this.props.twitter}>{this.props.twitter}</a></label>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label"><img alt='' src="https://img.icons8.com/fluency/24/000000/instagram-new.png"/> Instagram </label>
    <div className="col-sm-10">
    <label><a href={'https://www.instagram.com/'+this.props.instagram}>{this.props.instagram}</a></label>
    </div>
  </div>
 
 
                </div>
                </div>
            </div>
    </div>}
</div>

     
      );
    }}
   
  
  export default ProfileComponent;
  