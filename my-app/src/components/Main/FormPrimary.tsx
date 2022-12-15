import { useContext } from 'react';
import { Formik, FormikHelpers } from "formik";
import PageContext from '../../contexts/page-context';
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from './FormThird';
import { Values } from '../../interfaces';
import classes from "./FormPrimary.module.css";

const FormPrimary = () => {
  const pages = [<FormFirst />, <FormSecond />, <FormThird />];

  const pageCtx = useContext(PageContext);
  console.log(pageCtx.page);
console.log(pageCtx.data);
  return (
    <div className={classes.form__control}>
      <Formik
        initialValues={pageCtx.data}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
{pages[pageCtx.page]}

      </Formik>
    </div>

  )
};

export default FormPrimary;
