import React, { useState, useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';


//css
import styles from './Cliente.module.css'

const Risco = () => {
   const {sideClose, setsideClose } = useContext(SidebarStateContext);

   const classeSideBar = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   return (
     <div className={classeSideBar}>
        <MainHeader titulo='Gestão do Risco'></MainHeader>          
     
     </div>
  )
}

export default Risco