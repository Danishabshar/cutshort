import React,{useState} from "react";

// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/Step";
import { Button,Stepper,Step,StepLabel } from "@mui/material";



const Page1=(()=>{

const[num,setnum]=useState(0);
const Inc=(()=>{
    if(num<2){
    setnum(num+1)
}
})
const Dec=(()=>{
    if(num>0){
    setnum(num-1)
}
})


    return(
<div>
    
<Stepper  activeStep={num}  >
    <Step>
        <StepLabel  ></StepLabel>
    </Step>
    <Step>
        <StepLabel></StepLabel>
    </Step>
    <Step>
        <StepLabel></StepLabel>
    </Step>
</Stepper>


</div>


        
    )
})
export default Page1;