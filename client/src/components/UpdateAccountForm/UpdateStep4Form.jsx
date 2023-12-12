import { useFormik } from "formik";
import css from "./UpdateForm.module.css";
import { formStepperCount, userFormDetails } from "../../Store/store.js";

const UpdateForm4 = () => {
  const { count, goBackword } = formStepperCount((state) => state);
  const {updateform,userform}=userFormDetails((state)=>state)
  const formik = useFormik({
    initialValues: {
      bio: userform.bio||""
      
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
        updateform(values)
      console.log(values);
      setSubmitting(false);
    },
  });



  return (
    <form onSubmit={formik.handleSubmit} className={css.main}>
    <h1 className="capitalize text-gray-600 p-2 mx-2">
        Write a Quick Bio and Finish
      </h1>
    <div className={css.bio}>

    <textarea {...formik.getFieldProps("bio")} rows={10} cols={100} className="w-[100%] rounded-md p-4 outline-none capitalize mx-auto border-black border"/>


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

          <button type="button" onClick={()=>console.log(userform)}>log</button>

      </div>
    </form>
  );
};

export default UpdateForm4;
