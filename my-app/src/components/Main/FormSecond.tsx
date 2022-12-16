import { Field, Form } from "formik";
import CustomCheckbox from './CustomCheckbox';
import StepChanger from '../Footer/StepChanger';
import logo1 from "../../assets/images/icon-arcade.svg";
import logo2 from "../../assets/images/icon-advanced.svg";
import logo3 from "../../assets/images/icon-pro.svg";
import classes from "./FormSecond.module.css";
const FormSecond = () => {
  return (
    <Form className={classes.form__controls}>
      <div className={classes.form__container}>
        <img src={logo1} alt="logo-arcade"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.label1} htmlFor="arcade">Arcade</label>
          <Field className={classes.radio} id="arcade" type="radio" name="picked" value="Arcade"></Field>
          <p>price</p>
        </div>
      </div>
      <div className={classes.form__container}>
        <img src={logo2} alt="logo-advanced"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.label2} htmlFor="advanced"> Advanced </label>
          <Field className={classes.radio} id="advanced" type="radio" name="picked" value="Advanced"></Field>
          <p>price</p>
        </div>
      </div>
      <div className={classes.form__container}>
        <img src={logo3} alt="logo-pro"></img>
        <div className={classes.label__wrapper}>
          <label className={classes.label3} htmlFor="pro">Pro</label>
          <Field className={classes.radio} id="pro" type="radio" name="picked" value="Pro"></Field>
          <p>price</p>
        </div>
      </div>
    <CustomCheckbox />
    <StepChanger />
    </Form>
  );
};

export default FormSecond;
