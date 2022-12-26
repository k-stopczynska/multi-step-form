import { useState } from 'react';
import { Field, Form } from "formik";
import CustomCheckbox from './CustomCheckbox';
import StepChanger from '../Footer/StepChanger';
import logo1 from "../../assets/images/icon-arcade.svg";
import logo2 from "../../assets/images/icon-advanced.svg";
import logo3 from "../../assets/images/icon-pro.svg";
import classes from "./FormSecond.module.css";
const FormSecond = () => {
  const [value, setValue] = useState(false);
  const prices = [9, 12, 15];
  return (
    <Form className={classes.form__controls}>
      <div className={classes.form__container}>
        <img src={logo1} alt="logo-arcade"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.form__label} htmlFor="arcade">Arcade</label>
          <Field className={classes.form__radio} id="arcade" type="radio" name="picked" value="Arcade"></Field>
          <p>$ {value === false ? prices[0] : prices[0] * 10}/ {value === false ? 'mo' : 'yr'}</p>
        </div>
      </div>
      <div className={classes.form__container}>
        <img src={logo2} alt="logo-advanced"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.form__label} htmlFor="advanced"> Advanced </label>
          <Field className={classes.form__radio} id="advanced" type="radio" name="picked" value="Advanced"></Field>
          <p>$ {value === false ? prices[1] : prices[1] * 10}/ {value === false ? 'mo' : 'yr'}</p>
        </div>
      </div>
      <div className={classes.form__container}>
        <img src={logo3} alt="logo-pro"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.form__label} htmlFor="pro">Pro</label>
          <Field className={classes.form__radio} id="pro" type="radio" name="picked" value="Pro"></Field>
          <p>$ {value === false ? prices[2] : prices[2] * 10}/{value === false ? 'mo' : 'yr'}</p>
        </div>
      </div>
    <CustomCheckbox onChange={setValue} value={value}/>
    <StepChanger />
    </Form>
  );
};

export default FormSecond;
