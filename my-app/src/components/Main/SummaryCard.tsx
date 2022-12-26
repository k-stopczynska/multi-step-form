import { useContext } from "react";
import { Form } from "formik";
import PageContext from "../../contexts/page-context";
import StepChanger from "../Footer/StepChanger";
import classes from "./SummaryCard.module.css";

const SummaryCard = () => {

  const pageCtx = useContext(PageContext);
  console.log(pageCtx.data.toggle)
  return (
    <Form className={classes.card__wrapper}>
      <div className={classes.card__container}>
        <div className={classes.card__paragraph}>
          <p>
            {pageCtx.data.picked} (
            {pageCtx.data.toggle === false ? "Monthly" : "Yearly"})
          </p>
          <p>price</p>
        </div>
        <div className={classes.card__paragraph}>
          {pageCtx.data.addons.map((addon) => (
            <p key={addon}>{addon}</p>
          ))}
          <p>price</p>
        </div>
      </div>
      <div className={classes['card__paragraph-total']}>
        <p>Total (per {pageCtx.data.toggle === false ? "month" : "year"})</p>
        <p>price</p>
      </div>
      <StepChanger />
    </Form>
  );
};
export default SummaryCard;
