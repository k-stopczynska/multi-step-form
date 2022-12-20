import { Field } from "formik";
import classes from "./CustomCheckbox.module.css";

const CustomCheckbox = (props: any) => {

  const onChangingValue = () => {
    props.onChange(!props.value);
  };

  const inputClasses = props.value === true ? 'form__input-active' : 'form__input';
  return (
    <div className={classes.form__switch}>
      <p>Mothly</p>
      <label className={classes.form__label} htmlFor="switch">
        <Field
          className={classes[inputClasses]}
          type="checkbox"
          id="switch"
          name="toggle"
          value={props.value}
          onChange={onChangingValue}
        />
      </label>
      <p>Yearly</p>
    </div>
  );
};

export default CustomCheckbox;
