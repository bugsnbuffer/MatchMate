import Header from "../../components/Header/Header";
import UpdateForm1 from "../../components/UpdateAccountForm/UpdateStep1Form";
import css from "./UpdateAccount.module.css";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { formStepperCount } from "../../Store/store";

import React from "react";

const UpdateAccount = () => {
    const {count,goForword,goBackword}=formStepperCount((state)=>state);
  const steps = ["Basicinfo", "Interests","Prefrences","Finish"];
  return (
    <div>
      <Header />
      <div className={css.main}>
        <div className={css.topdiv}>
          <Stepper alternativeLabel activeStep={count}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stepper alternativeLabel activeStep={count}></Stepper>
          <br /><br />
          <UpdateForm1 />
         <div className={css.btnbox}> 
          {count!==0?<button onClick={goBackword} className={css.nextBtn}><FastRewindIcon/> Back</button>:""}
         { count!==3?<button onClick={goForword} className={css.nextBtn}>Next <FastForwardIcon/></button>:""}
         </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
