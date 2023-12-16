import React from 'react'

//components
import MainHeader from '../components/MainHeader';

const Dash = () => {
  return (
     <div className="container">
          <div className="Header">
          <MainHeader titulo='Dashboard'></MainHeader>  
          </div>
          <div className="VertMenu">
          </div>
          <div className="Main">
               Centro
          </div>
          <div className="Footer"></div>
     </div>

  )
}

export default Dash