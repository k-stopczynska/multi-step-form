import './Button.css'

const Button: React.FC<{
  type: "button" | "submit";
  onClick?: () => void;
  onSubmit?: () => void;
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
