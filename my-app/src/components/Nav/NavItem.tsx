import { useContext } from 'react';
import PageContext from '../../contexts/page-context';
import classes from "./NavItem.module.css";

const NavItem: React.FC<{ number: number }> = (props) => {
  const pageCtx = useContext(PageContext);
  const numberClasses = pageCtx.page + 1 === props.number ? 'active' : 'number__container'
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
      <div className={classes[numberClasses]}>{props.number}</div>
      <div className={classes.instructions__container}>
        <p>step {props.number}</p>
        <h3>{title}</h3>
      </div>
    </li>
  );
};

export default NavItem;
