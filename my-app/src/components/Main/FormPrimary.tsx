import { useContext } from "react";
import { Formik, FormikHelpers } from "formik";
import PageContext from "../../contexts/page-context";
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from "./FormThird";
import SummaryCard from './SummaryCard';
import { Values } from "../../interfaces";
import classes from "./FormPrimary.module.css";

const FormPrimary = () => {
  const pages = [<FormFirst />, <FormSecond />, <FormThird />, <SummaryCard />];

  const pageCtx = useContext(PageContext);

  const handleSubmit = (values: Values) => {
    pageCtx.onSubmit(values);
    console.log(pageCtx.data)
    console.log(pageCtx.page)
  };

  return (
    <div className={classes.form__control}>
      <Formik initialValues={pageCtx.data} onSubmit={handleSubmit}>
        {pages[pageCtx.page]}
      </Formik>
    </div>
  );
};

export default FormPrimary;
