import { Field, Form } from 'formik';
import classes from './FormForth.module.css';
const FormForth = () => {
    return (
<Form className={classes.form__controls}>
<div className={classes.form__wrapper}>
<label htmlFor="name">Name</label>
<Field className={classes.input__field} id="name" name="name" placeholder="Stephen King" />
</div>
<div className={classes.form__wrapper}>
<label htmlFor="email">Email Address</label>
<Field className={classes.input__field} id="email" name="email" placeholder="stephen.king.lorem.com" />
</div>
<div className={classes.form__wrapper}>
<label htmlFor="phone">Phone number</label>
<Field className={classes.input__field} id="phone" name="phone" placeholder="+1 234 567 890" />
</div>
</Form>
    )
}

export default FormForth;