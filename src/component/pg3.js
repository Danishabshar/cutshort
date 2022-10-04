import React,{useState} from "react";
import './Page3.css'
import Head from "./Head";
import Page1 from "./Page1";

const Third=()=>{

    
   
    
    return(
        <>
        <Head/>
        <Page1/>
        <div className='signup_container'>
        <div className='signup'>
          <div className='sign'>
         
          <h1 className='logo'>How are you planning to use Eden</h1> 
          <p >We '|| streamline your setup experience accordingly</p>
   
           <div  className="self"  > 
            <span className="Myself" >
            <img src="self.png"  height={"20px"} ></img>
            <h3>for myself</h3>
            <p className="para"  >Write better.Think  more clearly.stay organized</p>
            

            </span>

            <span  className="Myself"      >
            <img  src="Group.jpg" height={"20px"} ></img>
            <h3>with my team</h3>
            <p className="para"  >wikis,docs,tasks & projects,all in one place</p>
            

            </span>
            

           </div>
          
          
          
         
          <button  className="button2"   onClick="" >create workspace</button> <br/>
          
         
          
          </div>
      
          </div>
          
      </div>
      
      
      
      
      </>
    )
    
}

export default Third;