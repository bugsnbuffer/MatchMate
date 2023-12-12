import { useFormik } from "formik";
import css from "./UpdateForm.module.css";
import { formStepperCount, userFormDetails } from "../../Store/store.js";
import avatar from "../../assets/avatar.png";
import { useState } from "react";
import convertToBase64 from "../../helper/convert";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const UpdateForm1 = () => {
  const {updateform,userform}=userFormDetails((state)=>state);
  const [image, setimage] = useState();
  const [file, setfile] = useState();
  const { count, goBackword, goForword } = formStepperCount((state) => state);
  const formik = useFormik({
    initialValues: {
      username: userform.username||"",
      firstname:userform.firstname|| "",
      lastname: userform.lastname|| "",
      age: userform.age||"",
      gender:userform.gender|| "",
      relationship: userform.relationship||"",
      employmentStatus: userform.employmentStatus|| "",
      educationLevel:userform.educationLevel||""
    },
    onSubmit: async (values) => {
      values = await Object.assign(values, { image: image });
      console.log(userform);

      updateform(values);
      // Handle form submission here
      goForword();
      
    },
  });

  const uploadimg = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);

    setfile(base64);
    setimage(e.target.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={css.main}>
      <div className={css.basicinfo}>
        <div className={css.image}>
          <img src={file||avatar} alt="" />
          <div className="absolute top-3 text-gray-400 right-5">
            <label htmlFor="img">
              <ModeEditIcon />
            </label>
            <input
              type="file"
              id="img"
              className="hidden"
              onChange={uploadimg}
            />
          </div>
        </div>

        <div className={css.details}>
          <input
            type="text"
            placeholder="username"
            {...formik.getFieldProps("username")}
          />
          <input
            type="text"
            placeholder="firstname"
            {...formik.getFieldProps("firstname")}
          />
          <input
            type="text"
            placeholder="lastname"
            {...formik.getFieldProps("lastname")}
          />
          <input
            type="text"
            placeholder="mobile"
            {...formik.getFieldProps("age")}
          />
        </div>
      </div>

      <div className={css.otherinfo}>
        <select name="gender" id="gender" {...formik.getFieldProps("gender")}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          name="relationship"
          id="relationship"
          {...formik.getFieldProps("relationship")}
        >
          <option value="">Relationship</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="engaged">Engaged</option>
        </select>

        <select
          name="employmentStatus"
          id="employmentStatus"
          {...formik.getFieldProps("employmentStatus")}
        >
          <option value="">Employment</option>
          <option value="working_professional">Working Professional</option>
          <option value="student">Student</option>
        </select>


        <select
          name="educationLevel"
          id="educationLevel"
          {...formik.getFieldProps("educationLevel")}
        >
          <option value="">Education</option>
          <option value="graduate">Graduate</option>


          <option value="highschool">HighSchool</option>
          <option value="student">School</option>
        </select>
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
      </div>
    </form>
  );
};

export default UpdateForm1;
