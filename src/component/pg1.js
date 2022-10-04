import React  from "react";
import { useNavigate } from "react-router-dom";
import './Page.css'
import Head from "./Head";
import Page1 from "./Page1";

const FIRST=()=>{
    const navigate=useNavigate();
    return(
        <>
        <Head/>
        <Page1/>
        <div className='signup_container'>
        <div className='signup'>
          <div className='sign'>
          <h1 className='h1logo'>welcome ! First things first...</h1> 
          <p>you can always change them later.</p>
           <h2>Full Name</h2>
           <input className='input1' type="email" name='email' placeholder='Steve jobs' />
           <h2>Display Name</h2>
          <input className='input1' type='password' name='password' placeholder='Steve' /> <br/>
  
          
         
          <button  className="button1"   onClick={()=>navigate("/p1")} >create workspace</button> <br/>
          
         
          
          </div>
      
          </div>
          
      </div>
      
      
      
      
      </>
    )
    
}

export default FIRST;