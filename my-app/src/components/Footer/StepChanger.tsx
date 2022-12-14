import Button from "../../UI/Button";
import classes from "./StepChanger.module.css";

const StepChanger = () => {
  const names = ["Go Back", "Next Step", "Confirm"];
  const stepChangeHandler = () => {
    console.log("ajm changing page!");
  };
  return (
    <div className={classes.button__container}>
      <Button
        name={names[0]}
        type="button"
        onClick={stepChangeHandler}
        classes={classes.button__reward}
      ></Button>

      <Button
        name={names[1]}
        type="button"
        onClick={stepChangeHandler}
        classes={classes.button__forward}
      ></Button>
    </div>
  );
};

export default StepChanger;
