import { Formik, FormikHelpers } from "formik";
//import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import classes from "./FormPrimary.module.css";

const FormPrimary = () => {
  interface Values {
    name: string;
    email: string;
    phone: string;
    picked: string;
    toggle: boolean;
  }

  return (
    <div className={classes.form__control}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          picked: "",
          toggle: false,
        }}
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



        <FormSecond />


      </Formik>
    </div>

  )
};

export default FormPrimary;
