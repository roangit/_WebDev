import React, { useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

//importando icones
import { FaTools, FaHandsHelping, FaWpforms, FaTachometerAlt } from "react-icons/fa";
import { PiSirenBold,PiSirenFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//css style
import styles from './Sidebar.module.css';


const Sidebar = () => {
  const {sideClose, setsideClose } = useContext(SidebarStateContext);
  
  const menuRef = useRef();

  const OnMenuClick = () => {
    setsideClose(!sideClose);
    menuRef.current.classList.toggle(styles.close); 

  };

  //`${styles.firstclass} ${styles.secondclass}`

  return (
    <div className={`${styles.sidebar} ${styles.close}`}ref={menuRef} >
      <div className={styles.logo_details}>
        <i className={styles.menulogo}  onClick={OnMenuClick}><CgMenuGridO /></i>
        <span className={styles.logo_name}>S.G.I.</span>
      </div>
      <ul className={styles.nav_links}>
        <SideItem path='/cliente' nome='Clientes' icone={<FaHandsHelping/>}/>
        <SideItem path='/projeto' nome='Projetos' icone={<FaWpforms/>}/>
        <SideItem path='/dash'   nome='DashBoard' icone={<FaTachometerAlt/>}/>
        <SideItem path='/risco'   nome='Ger.Risco'   icone={<PiSirenFill />} visivel={true}/>     
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
                  <span className={styles.link_name}>{nome} </span>
             </NavLink>  
             <ul className={`${styles.sub_menu} ${styles.blanck}`}>
                <li><NavLink className={styles.link_name}to={path}>{nome}</NavLink></li>         
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
