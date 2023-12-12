import { useFormik } from "formik";
import css from "./UpdateForm.module.css";
import { formStepperCount } from "../../Store/store.js";
import { userFormDetails } from "../../Store/store.js";

const UpdateForm2 = () => {
  const {updateform,userform}=userFormDetails((state)=>state)
  const { count, goBackword, goForword } = formStepperCount((state) => state);
  const formik = useFormik({
    initialValues: {
      interests: userform.interests|| [],
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      updateform(values)
      goForword();
      console.log(userform);
      setSubmitting(false);
    },
  });

  const interestsList = [
    "Reading 📖",
    "Traveling ✈️",
    "Music 🎶",
    "Sports 🤾‍♀️",
    "Gaming 🎮",
    "Technology 🧑‍💻",
    "Fitness 💪",
    "Art 🖼️",
    "Cooking 🍚",
    "Movies/series 🎞️",
  ];

  const handleInterestClick = (interest) => {
    const currentInterests = formik.values.interests;

    if (currentInterests.includes(interest)) {
      const updatedInterests = currentInterests.filter(
        (selectedInterest) => selectedInterest !== interest
      );
      formik.setFieldValue("interests", updatedInterests);
    } else if (currentInterests.length < 5) {
      formik.setFieldValue("interests", [...currentInterests, interest]);
    }
  };

  const isInterestSelected = (interest) => {
    return formik.values.interests.includes(interest);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={css.main}>
      <h1 className="capitalize text-gray-600 p-2 mx-2">
        Select 5 interests among this
      </h1>

      <div className={css.interestsbox}>
        {interestsList.map((interest, index) => (
          <div
            key={index}
            className={`${css.interests} ${
              isInterestSelected(interest) ? css.selectedInterest : ""
            }`}
            onClick={() => handleInterestClick(interest)}
          >
            <label className={css.interstsLabel}>{interest}</label>
          </div>
        ))}
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

export default UpdateForm2;
