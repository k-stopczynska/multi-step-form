import { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PageContext from "../../contexts/page-context";
import Section from "./Section";
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from "./FormThird";
import SummaryCard from "./SummaryCard";
import ThankYouCard from "./ThankYouCard";
import { Values } from "../../interfaces";
import classes from "./FormPrimary.module.css";

const FormPrimary = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(20, "Too Long!")
      .required("This field is required"),
    email: Yup.string().matches(emailRegex).required("This field is required"),
    phone: Yup.string().matches(phoneRegex).required("This field is required"),
  });
  const pages = [
    <FormFirst />,
    <FormSecond />,
    <FormThird />,
    <SummaryCard />,
    <ThankYouCard />,
  ];

  const pageCtx = useContext(PageContext);

  const handleSubmit = (values: Values) => {
    pageCtx.onSubmit(values);
  };

  return (
    <div className={classes.form__control}>
      <Section />
      <Formik
        initialValues={pageCtx.data}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
          { pages[pageCtx.page] }
      </Formik>
    </div>
  );
};

export default FormPrimary;
