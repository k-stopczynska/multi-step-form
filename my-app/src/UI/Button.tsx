//import { Values } from '../interfaces';
import './Button.css'

const Button: React.FC<{
  type: "button" | "submit";
  //define type of data
  onClick?: (data: any) => void;
  onSubmit?: (data: any) => void;
  classes: string;
  name: string;
}> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      className={props.classes}
    >
      {props.name}
    </button>
  );
};

export default Button;
