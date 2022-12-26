import { Field, Form, ErrorMessage } from "formik";

import StepChanger from "../Footer/StepChanger";
import classes from "./FormFirst.module.css";
const FormFirst = () => {
  return (
    <Form className={classes.form__controls}>
      <div className={classes.form__wrapper}>
        <label htmlFor="name">Name</label>
        <Field
          className={classes.input__field}
          id="name"
          name="name"
          placeholder="Stephen King"
        />
        <ErrorMessage
          className={classes.form__error}
          name="name"
          component="span"
        />
      </div>
      <div className={classes.form__wrapper}>
        <label htmlFor="email">Email Address</label>
        <Field
          className={classes.input__field}
          id="email"
          name="email"
          placeholder="stephen.king.lorem.com"
        />
        <ErrorMessage
          className={classes.form__error}
          name="email"
          component="span"
        />
      </div>
      <div className={classes.form__wrapper}>
        <label htmlFor="phone">Phone number</label>
        <Field
          className={classes.input__field}
          id="phone"
          name="phone"
          placeholder="+1 234 567 890"
        />
        <ErrorMessage
          className={classes.form__error}
          name="phone"
          component="span"
        />
      </div>

      <StepChanger />
    </Form>
  );
};

export default FormFirst;
