import React, { useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';

//importando icones
import { FaHandsHelping, FaArchive, FaChartBar, FaWpforms } from "react-icons/fa";
import { PiSirenFill } from "react-icons/pi";
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

  const iconStyles = {width:'25px', height:'25px'};

  //`${styles.firstclass} ${styles.secondclass}`

  return (
    <div className={`${styles.sidebar} ${styles.close}`}ref={menuRef} >
      <div className={styles.logo_details}>
        <i className={styles.menulogo}  onClick={OnMenuClick}><CgMenuGridO style={{width:'40px', height:'40px'}}/></i>
        <span className={styles.logo_name}>S.G.I.</span>
      </div>
      <ul className={styles.nav_links}>
        <SideItem path='/dash'   nome='DashBoard' icone={<FaChartBar style={iconStyles}/>}/>
        <SideItem path='/cliente' nome='Cadastro' icone={ <FaArchive style={iconStyles}/>} subItem={true}>
          <SideSubItem path='/projeto' nome='Técnicos'/>
        </SideItem>
         <SideItem path='/projeto' nome='Projetos' icone={<FaHandsHelping style={iconStyles}/>}/>
        <SideItem path='/risco'   nome='Ger.Risco'   icone={<PiSirenFill style={iconStyles}/>} visivel={true}/>     
        <SideItem path='/risco'   nome='Formatação'   icone={<FaWpforms style={iconStyles}/>} visivel={true}/>     
      </ul>
    </div>
  );
};


const SideItem = ({path, icone, nome, visivel=true, subItem=false}) => {
      const classSubMenu = subItem ? `${styles.sub_menu}` : `${styles.sub_menu} ${styles.blanck}`
      return (
        <li>  
             <NavLink
                  to={path}>
                  <i>{icone}</i>
                  <span className={styles.link_name}>{nome} </span>
             </NavLink>  
             
              <ul className={classSubMenu}>
                <li><NavLink className={styles.link_name}to={path}>{nome}</NavLink></li>         
              </ul>
        </li>
      );
}


const SideSubItem = ({path, nome, visivel=true}) => {
  return (
     <li>  
          <NavLink
              className={styles.link_name}
              to={path}>
              {nome}
          </NavLink>    
     </li>
  );
}

export {Sidebar, SideItem, SideSubItem }
