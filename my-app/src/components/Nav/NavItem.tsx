import classes from "./NavItem.module.css";

const NavItem: React.FC<{ number: number }> = (props) => {
  let title =
    props.number === 1
      ? "your info"
      : props.number === 2
      ? "select plan"
      : props.number === 3
      ? "add-ons"
      : "summary";
  return (
    <li className={classes.list__item}>
      <div className={classes.number__container}>{props.number}</div>
      <div className={classes.instructions__container}>
        <p>step {props.number}</p>
        <h3>{title}</h3>
      </div>
    </li>
  );
};

export default NavItem;
