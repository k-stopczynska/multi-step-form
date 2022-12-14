import { Field } from "formik";
import classes from "./CustomCheckbox.module.css";

const CustomCheckbox = () => {
  return (
    <div className={classes.form__switch}>
      <p>Mothly</p>
      <label className={classes.form__label} htmlFor="switch">
        <Field
          className={classes.form__input}
          type="checkbox"
          id="switch"
          name="toggle"
        />
      </label>
      <p>Yearly</p>
    </div>
  );
};

export default CustomCheckbox;
