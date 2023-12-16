import React from 'react';
import { FaTools, FaHandsHelping, FaBars, FaWpforms, FaTachometerAlt } from "react-icons/fa";
/* outros boms icones
FaCog - engrenagem, FaWrench - 1 chave boca
*/
import { NavLink } from 'react-router-dom';

//css
import "./Sidebar.css";

const OnMouveOverHandle = () => {
  var elem = document.getElementById("burger-icon");
  elem.style.transform =  "rotate(90deg)";
  elem.style.transition = "transform 0.5s 0s ease";
};
const OnMouseLeavehandle = () => {
  var elem = document.getElementById("burger-icon");
  elem.style.transform =  "rotate(180deg)";
  elem.style.transition = "transform 0.5s 0s ease";
};

const Sidebar = () => {
  return (
    <div className="side-container"
        onMouseOver={OnMouveOverHandle}
        onMouseLeave={OnMouseLeavehandle}>
          <div className="side-header">
            <div className="burger-icon">
              <FaBars id="burger-icon"/>
            </div>
          </div>
        <div className="sidebar">       
          <nav>
               <ul>
                    <SideItem path='/cliente' nome='Clientes' icone={<FaHandsHelping/>}/>
                    <SideItem path='/projeto' nome='Projetos' icone={<FaWpforms/>}/>
                    <SideItem path='/dash'   nome='DashBoard' icone={<FaTachometerAlt/>}/>
                    <SideItem path='/tabelas'   nome='Tabelas'   icone={<FaTools/>} visivel={true}/>                   
               </ul>
          </nav>       
        </div>       
        <div className="side-footer">
        </div>
      </div>
  );
};


const SideItem = ({path,icone, nome, visivel=true}) => {
     return (
        <li style={{display: visivel ? 'block' : 'none'}} >  
             <NavLink
                  to={path}>
                  <i>{icone}</i>
                  <span>{nome} </span>
             </NavLink>    
        </li>
     );
}
export {SideItem, Sidebar}
