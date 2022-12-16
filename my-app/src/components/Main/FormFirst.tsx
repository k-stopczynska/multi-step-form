import { useContext } from 'react';
import { Field, Form } from "formik";
import PageContext from '../../contexts/page-context';
import StepChanger from '../Footer/StepChanger';
import classes from "./FormFirst.module.css";
const FormFirst = () => {
  const pageCtx = useContext(PageContext);
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
      </div>
      <div className={classes.form__wrapper}>
        <label htmlFor="email">Email Address</label>
        <Field
          className={classes.input__field}
          id="email"
          name="email"
          placeholder="stephen.king.lorem.com"
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
      </div>

      <StepChanger />
    </Form>
  );
};

export default FormFirst;
