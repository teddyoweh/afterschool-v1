import React, { Component } from "react";

import 'boxicons';

export class Sidebar extends Component {


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
       
<div className='sidebar-container'>
<div className='sidebar-header'>

    <ul>

        <li>
            <a href='/'>
            <i className='bx bxs-dashboard'></i>

            
            </a>
        </li>
        
        <li>
            <a href='/'>
            <i class='bx bx-bookmark-alt-minus'></i>

            
            </a>
        </li>
        
        <li>
            <a href='/'>
            <i class='bx bx-group' ></i>

            
            </a>
        </li>
        
        <li>
            <a href='/'>
            <i class='bx bx-phone'></i>
           <span>3</span>

            
            </a>
        </li>
        
        <li>
            <a href='/'>
            <i class='bx bx-message-square-detail'></i>

            
            </a>
        </li>

    </ul>
</div>
<a href='/settings'>
<div className='sidebar-foot'>{this.props.img==='' && this.props.f+ this.props.l}</div></a>
</div>

        </div>
      );
    }}
   
  
  export default Sidebar;
  