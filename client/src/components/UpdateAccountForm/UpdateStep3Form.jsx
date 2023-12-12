import { useFormik } from "formik";
import css from "./UpdateForm.module.css";
import { formStepperCount } from "../../Store/store.js";
import { userFormDetails } from "../../Store/store.js";

const UpdateForm3 = () => {
  const {updateform,userform}=userFormDetails((state)=>state)
  const { count, goBackword, goForword } = formStepperCount((state) => state);
  const formik = useFormik({
    initialValues: {
      preferences: userform.preferences|| {
        cleanliness: "",
        dietary: "",
        smokingAlcohol: "",
        sleepingHabits: "",
        social: "",
      },
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      updateform(values)
      goForword();
      setSubmitting(false);
    },
  });

  const cleanlinessOptions = ["Neat", "Average", "Messy"];
  const dietaryOptions = ["Vegetarian", "Vegan", "Non-Vegetarian"];
  const smokingAlcoholOptions = [
    "Non-Smoker/Drinker",
    "Social Smoker/Drinker",
    "Regular Smoker/Drinker",
  ];
  const sleepingHabitsOptions = ["Early Riser", "Night Owl", "Average"];
  const socialOptions = ["Introvert", "Ambivert", "Extrovert"];

  const handlePreferenceChange = (category, value) => {
    formik.setFieldValue(`preferences.${category}`, value);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={css.main}>
      <div className={css.preferences}>
        <div className={css.preferencbox}>
          <h1 className={css.headings}>Cleaness :</h1>

          {cleanlinessOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`cleanliness-${index}`}
                name="cleanliness"
                value={option}
                checked={formik.values.preferences.cleanliness === option}
                onChange={() => handlePreferenceChange("cleanliness", option)}
              />
              <label htmlFor={`cleanliness-${index}`}>{option}</label>
            </div>
          ))}
        </div>

        <div className={css.preferencbox}>
          <h1 className={css.headings}>Dieatary Habits:</h1>

          {dietaryOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`dietary-${index}`}
                name="dietary"
                value={option}
                checked={formik.values.preferences.dietary === option}
                onChange={() => handlePreferenceChange("dietary", option)}
              />
              <label htmlFor={`dietary-${index}`}>{option}</label>
            </div>
          ))}
        </div>

        <div className={css.preferencbox}>
          <h1 className={css.headings}>Smoking & Alcohol:</h1>

          {smokingAlcoholOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`smokingAlcohol-${index}`}
                name="smokingAlcohol"
                value={option}
                checked={formik.values.preferences.smokingAlcohol === option}
                onChange={() =>
                  handlePreferenceChange("smokingAlcohol", option)
                }
              />
              <label htmlFor={`smokingAlcohol-${index}`}>{option}</label>
            </div>
          ))}
        </div>

        <div className={css.preferencbox}>
          <h1 className={css.headings}>Sleeping Habits:</h1>

          {sleepingHabitsOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`sleepingHabits-${index}`}
                name="sleepingHabits"
                value={option}
                checked={formik.values.preferences.sleepingHabits === option}
                onChange={() =>
                  handlePreferenceChange("sleepingHabits", option)
                }
              />
              <label htmlFor={`sleepingHabits-${index}`}>{option}</label>
            </div>
          ))}
        </div>

        <div className={css.preferencbox}>
          <h1 className={css.headings}>Social Preferences:</h1>
          {socialOptions.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`social-${index}`}
                name="social"
                value={option}
                checked={formik.values.preferences.social === option}
                onChange={() => handlePreferenceChange("social", option)}
              />
              <label htmlFor={`social-${index}`}>{option}</label>
            </div>
          ))}
        </div>
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

export default UpdateForm3;
