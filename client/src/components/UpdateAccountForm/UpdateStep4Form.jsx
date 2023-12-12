import { useFormik } from "formik";
import { useState } from "react";
import css from "./UpdateForm.module.css";
import { formStepperCount, userFormDetails } from "../../Store/store.js";
import PopUp from "../popUp/PopUp.jsx";

const UpdateForm4 = () => {
  const { count, goBackword } = formStepperCount((state) => state);
  const { updateform, userform } = userFormDetails((state) => state);

  const [open,setopen]=useState(false);
  const formik = useFormik({
    initialValues: {
      bio: userform.bio || "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      updateform(values);
      setopen(true)
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.main}>
      <h1 className="capitalize text-gray-600 p-2 mx-2">
        Write a Quick Bio and Finish
      </h1>
      <div className={css.bio}>
        <textarea
          {...formik.getFieldProps("bio")}
          rows={10}
          cols={100}
          className="w-[100%] rounded-md p-4 outline-none capitalize mx-auto border-black border"
        />
      </div>

      <div className={css.btnbox}>
        {count !== 0 ? (
          <button type="button" onClick={goBackword} className={css.nextBtn}>
            {" "}
            Back
          </button>
        ) : (
          ""
        )}
        {count !== 3 ? (
          <button type="submit" className={css.nextBtn}>
            Next{" "}
          </button>
        ) : (
          ""
        )}
        <button type="submit" className={css.nextBtn}>
          Update{" "}
        </button>

      </div>
      <PopUp title="Confirm Edit" openPopUp={open} setopenPopup={setopen}>
      <div className="w-[100%] text-gray-500">
        <h1 className="p-2 m-2 w-[100%]">If the details are correct, click the <span className="bg-yellow-200 text-black px-1">Update</span> button to save your changes. If you need to make any changes, You can still go back and Edit</h1>
        <button className="p-2 m-2 border border-black" onClick={()=>{
          alert(userform.username)
        }}> Update Profile</button>

      </div>
      
      </PopUp>
    </form>
  );
};

export default UpdateForm4;
