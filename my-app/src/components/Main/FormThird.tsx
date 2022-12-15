import { Field, Form } from "formik";
import StepChanger from '../Footer/StepChanger';
import classes from "./FormThird.module.css";
const FormThird = () => {
  return (
    <Form className={classes.form__control}>
      <div className={classes.form__controls}>
        <div className={classes.form__input}>
          <Field
            type="checkbox"
            name="addons"
            value="online-services"
            id="online-services"
          ></Field>
        </div>
        <div className={classes.form__text}>
          <label htmlFor="online-services">Online services</label>
          <span>Access to multiplayer games</span>
        </div>
        <p>price</p>
      </div>
      <div className={classes.form__controls}>
        <div className={classes.form__input}>
          <Field
            type="checkbox"
            name="addons"
            value="larger-storage"
            id="larger-storage"
          ></Field>
        </div>
        <div className={classes.form__text}>
          <label htmlFor="larger-storage">Larger storage</label>
          <span>Extra 1TB of cloud save</span>
        </div>
        <p>price</p>
      </div>
      <div className={classes.form__controls}>
        <div className={classes.form__input}>
          <Field
            type="checkbox"
            name="addons"
            value="customizable-profile"
            id="customizable-profile"
          ></Field>
        </div>
        <div className={classes.form__text}>
          <label htmlFor="customizable profile">Customizable profile</label>
          <span>Custom theme on your profile</span>
        </div>
        <p>price</p>
      </div>
      <StepChanger />
    </Form>
  );
};

export default FormThird;
