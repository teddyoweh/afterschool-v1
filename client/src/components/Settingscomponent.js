import React, { Component } from "react";

import 'boxicons';

export class SettingsComponent extends Component {


/*


 _________  ______   ______   ______   __  __    
/________/\/_____/\ /_____/\ /_____/\ /_/\/_/\   
\__.::.__\/\::::_\/_\:::_ \ \\:::_ \ \\ \ \ \ \  
   \::\ \   \:\/___/\\:\ \ \ \\:\ \ \ \\:\_\ \ \ 
    \::\ \   \::___\/_\:\ \ \ \\:\ \ \ \\::::_\/ 
     \::\ \   \:\____/\\:\/.:| |\:\/.:| | \::\ \ 
      \__\/    \_____\/ \____/_/ \____/_/  \__\/ 
                                                 



*/
 
    
  
    render() {
 
   
      return (
        <div>
       
<div className='assetbar-container'>
    <div className='assetbar-header'>
    
    <div className="asset-title"><i class='bx bx-cog' ></i><h1>Settings</h1></div>
    <div className='asset-searchbar'>
    <i class='bx bx-search'></i><input type='text' placeholder='Search' />
    </div>
    </div>
    <div className='settings assetbar-body'>
        <div className='settings-container'>
            <div className='settings-item'>
                <div className='settings-item-header'>

                    <i class='bx bx-user'></i>
                    <span>Personal</span>
                </div>
                <div className='settings-item-body'>
                    <div className='settings-item-body-e'>
                        <label>Profile</label></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className='profile-container container'>
    </div>

        </div>
      );
    }}
   
  
  export default SettingsComponent;
  