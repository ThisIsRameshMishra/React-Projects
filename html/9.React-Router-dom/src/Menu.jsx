import React from 'react';
import {NavLink} from "react-router-dom"; 
const Menu=()=>{
  return(
      <>
      <a className="menu_style">
      <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
      <NavLink exact activeClassName="active_class" to='/contact'>Contact</NavLink>
      <NavLink exact activeClassName="active_class" to='/services'>Services</NavLink>
      
      </a>
      </>
  );
  
}
export default Menu;