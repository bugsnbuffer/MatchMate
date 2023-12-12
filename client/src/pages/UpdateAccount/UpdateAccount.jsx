import Header from "../../components/Header/Header";
import UpdateForm1 from "../../components/UpdateAccountForm/UpdateStep1Form";
import css from "./UpdateAccount.module.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { formStepperCount } from "../../Store/store";
import UpdateForm2 from "../../components/UpdateAccountForm/UpdateStep2Form";
import UpdateForm3 from "../../components/UpdateAccountForm/UpdateStep3Form";
import UpdateForm4 from "../../components/UpdateAccountForm/UpdateStep4Form";

const UpdateAccount = () => {
  const { count } = formStepperCount((state) => state);
  const steps = ["Basicinfo", "Interests", "Prefrences", "Finish"];

  const formComponents = [
    <UpdateForm1 key="step0" />,
    <UpdateForm2 key="step1" />,
    <UpdateForm3 key="step2" />,
    <UpdateForm4 key="step3" />,


  ];
  return (
    <div>
      <Header />
      <div className={css.main}>
        <div className={ css.topdiv}>
          <Stepper alternativeLabel activeStep={count}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Stepper alternativeLabel activeStep={count}></Stepper>
          <br />
          <br />
          {formComponents[count]}


        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
