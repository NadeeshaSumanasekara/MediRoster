import React from 'react';
import "./SideBar.css"; 
import { SideBarDataC } from './SideBarDataC';  
import NavBar from "./NavBar";   
// import { Container } from './styles';

function SideBarC() {
  return (
    
    <div className='SideBar'>
        <ul className='SideBarList'>
            {SideBarDataC.map((val, key) => {
                return (
                    <li key={key} 
                    className='row'
                    id={window.location.pathname == val.link ? "active":""}
                    onClick={()=>{window.location.pathname = val.link;}}>
                        {" "}
                        <div id='icon'>{val.icon}</div>{" "}
                        <div id='title'>
                            {val.title}
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default SideBarC;