import React from "react";
import './Page2.css'
import { useNavigate } from "react-router-dom";
import Head from "./Head";
import Page1 from "./Page1";

const Second=()=>{
    const navigate=useNavigate();
    return(
        <>
       <Head/>
       <Page1/>
        <div className='signup_container'>
        
        <div className='signup'>
        
          <div className='sign'>
          
          <h1 className='logo'>Lets set up a home for all your work</h1> 
          <p >you can always create another workspace later.</p>
           <h2  className="h22" >Workspace Name</h2>
           <input className='input1' type="email" name='email' placeholder='Steve jobs' />
           <h2   >WorkSpace URL</h2>
          <input className='input1' type='password' name='password' placeholder='Steve' /> <br/>
  
          
         
          <button  className="button1"   onClick={()=>navigate("/p2")} >create workspace</button> <br/>
          
         
          
          </div>
      
          </div>
          
      </div>
      
      
      
      
      </>
    )
    
}

export default Second;