import React from 'react';
import Menu from "./Menu";
import "../styles.css";

const Layout =({title="Title",description="Description",className , children})=>(
    <div>

        <Menu/>
         <div className="jumbotron">
            <h3 className="Abhi"><b>{title}</b></h3>
            <h5 className="Abhi"><b>{description}</b></h5>
         </div> 
         <div className={className}>
             {children}
         </div>   
    </div>    
);
export default Layout;