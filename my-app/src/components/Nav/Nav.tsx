import NavItem from './NavItem';
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
       <NavItem number={1}/>
       <NavItem number={2}/>
       <NavItem number={3}/>
       <NavItem number={4}/>
      </ul>
    </header>
  );
};
export default Nav;
