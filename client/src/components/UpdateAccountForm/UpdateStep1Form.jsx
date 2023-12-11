import css from "./UpdateForm.module.css";
import profile from "../../assets/person.jpg";
import { useFormik } from "formik";

const UpdateForm1 = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
  });
  return (
    <form action="" className={css.main}>
      {/* <h1 className="text-2xl text-center p-2 bg-purple-100">Update Profile</h1> */}
      <hr></hr>
      <h1 className={css.headings}>Basic information</h1>
      <div className={css.basicinfo}>
        <div className={css.image}>
          <img src={profile} alt="" />
        </div>

        <div className={css.details}>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="text" placeholder="mobile" />
        </div>
      </div>
      <br></br>

      <hr></hr>
      <h1 className={css.headings}>Other Information</h1>
      <div className={css.otherinfo}>
        <select name="" id="">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">felmale</option>
        </select>

        <select>
          <option value="">Relationship</option>
          <option value="">Married</option>
          <option value="">Single</option>
          <option value="">Engaged</option>
        </select>

        <select name="" id="">
          <option value="">Employment </option>
          <option value="">Working professional </option>
          <option value="">Student </option>
        </select>
      </div>
      <br />

      <hr></hr>
  
    </form>
  );
};

export default UpdateForm1;
