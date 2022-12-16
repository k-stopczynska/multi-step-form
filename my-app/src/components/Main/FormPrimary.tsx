import { useContext } from "react";
import { Formik } from "formik";
import PageContext from "../../contexts/page-context";
import Section from './Section';
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from "./FormThird";
import SummaryCard from './SummaryCard';
import ThankYouCard from './ThankYouCard';
import { Values } from "../../interfaces";
import classes from "./FormPrimary.module.css";

const FormPrimary = () => {
  const pages = [<FormFirst />, <FormSecond />, <FormThird />, <SummaryCard />, <ThankYouCard />];

  const pageCtx = useContext(PageContext);

  const handleSubmit = (values: Values) => {
    pageCtx.onSubmit(values);
  };

  return (
    <div className={classes.form__control}>
       <Section />
      <Formik initialValues={pageCtx.data} onSubmit={handleSubmit}>
        {pages[pageCtx.page]}
      </Formik>
    </div>
  );
};

export default FormPrimary;
