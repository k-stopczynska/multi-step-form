import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li className={classes.list__item}>1</li>
        <li className={classes.list__item}>2</li>
        <li className={classes.list__item}>3</li>
        <li className={classes.list__item}>4</li>
      </ul>
    </header>
  );
};
export default Nav;
