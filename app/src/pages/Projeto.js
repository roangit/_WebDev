import React, { useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';


//css
import styles from './Cliente.module.css'

const Projeto = () => {
   const {sideClose} = useContext(SidebarStateContext);

   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Projetos'></MainHeader>          
     
     </div>
  )
}

export default Projeto