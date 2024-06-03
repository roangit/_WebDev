import React, { useRef } from 'react';
import { FaTools, FaHandsHelping, FaWpforms, FaTachometerAlt } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
/* outros boms icones
FaCog - engrenagem, FaWrench - 1 chave boca
*/
import { NavLink } from 'react-router-dom';

//css
import "./Sidebar.css";



const Sidebar = () => {

  const menuRef = useRef();

  const OnMenuClick = () => {
    menuRef.current.classList.toggle("close");   
  };

  return (
    <div className="sidebar close" ref={menuRef} >
      <div className="logo-details">
        <i className="menulogo"  onClick={OnMenuClick}><CgMenuGridO /></i>
        <span className="logo_name">S.G.I.</span>
      </div>
      <ul className="nav-links">
        <SideItem path='/cliente' nome='Clientes' icone={<FaHandsHelping/>}/>
        <SideItem path='/projeto' nome='Projetos' icone={<FaWpforms/>}/>
        <SideItem path='/dash'   nome='DashBoard' icone={<FaTachometerAlt/>}/>
        <SideItem path='/tabelas'   nome='Tabelas'   icone={<FaTools/>} visivel={true}/>     
      </ul>
    </div>
  );
};


const SideItem = ({path,icone, nome, visivel=true}) => {
     return (
        <li style={{display: visivel ? 'block' : 'none'}} >  
             <NavLink
                  to={path}>
                  <i>{icone}</i>
                  <span className='link_name'>{nome} </span>
             </NavLink>  
             <ul className="sub-menu blank">
                <li><NavLink className="link_name"to={path}>{nome}</NavLink></li>         
              </ul>
        </li>
     );
}


const SideSubItem = ({path, nome, visivel=true}) => {
  return (
     <li style={{display: visivel ? 'block' : 'none'}} >  
          <NavLink
              className="link_name"
              to={path}>
              {nome}
          </NavLink>    
     </li>
  );
}

export {Sidebar, SideItem, SideSubItem }
