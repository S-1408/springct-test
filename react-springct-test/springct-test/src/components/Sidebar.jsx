import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle =()=>setIsOpen(!isOpen)
  const menuItem = [
    
    {
      url: "/view",
      name: "View",
    },
    {
      url: "/",
      name: "Add",
    },
  ];

  return (
    <div className="container">
      {/* <div style={{width:isOpen? '300px' : '50px'}} className="sidebar"> */}
      <div  className="sidebar">

        <div className="top_section">
          {/* <h1 style={{display:isOpen? 'block' : 'none'}}>Spring_Ct</h1> */}
          

          <div className="bars">{/* <faBar/> */}
           
          <FontAwesomeIcon icon="fa-solid fa-bars-staggered" onClick={toggle} /></div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.url} className='link'>
            {/* <p  style={{display:isOpen? 'block' : 'none'}}>{item.name}</p> */}
            <p  >{item.name}</p>

          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
