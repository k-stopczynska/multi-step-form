import { useContext } from 'react';
import Button from "../../UI/Button";
import PageContext from '../../contexts/page-context';
import classes from "./StepChanger.module.css";

const StepChanger = () => {
  const names = ["Go Back", "Next Step", "Confirm"];
  const pageCtx = useContext(PageContext);

  const prevStepHandler = () => {
    pageCtx.onClick(pageCtx.data);
  };

  const nextStepHandler = () => {
    pageCtx.onSubmit(pageCtx.data);
  }
  return (
    <footer className={classes.button__container}>
      <Button
        name={names[0]}
        type="button"
        onClick={prevStepHandler}
        classes={classes.button__reward}
      ></Button>

      <Button
        name={names[1]}
        type="submit"
        onClick={nextStepHandler}
        classes={classes.button__forward}
      ></Button>
    </footer>
  );
};

export default StepChanger;
