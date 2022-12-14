import checkIcon from "../../assets/images/icon-checkmark.svg";
import classes from "./ThankYouCard.module.css";

const ThankYouCard = () => {
  return (
    <section className={classes.card}>
      <div className={classes.card__wrapper}>
        <div className={classes.card__img}>
          <img src={checkIcon} alt="checkmark-icon" />
        </div>
      </div>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default ThankYouCard;
