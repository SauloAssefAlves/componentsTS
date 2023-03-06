import "./inputs.css";
interface inputsProps {
  label: string;
  options: Array<{ label: string; value: number }>;
  icon: JSX.Element;
}

export default function Inputs({ label, options, icon }: inputsProps) {
  return (
    <div className="select_menu">
      <div className="select_btn">
        <span className="sBtn_text">{label}</span>
        <i>{icon}</i>
      </div>
      <ul className="options">
        <li className="option">
          <i className="bx bxl_github"></i>
          <span className="option_text">Option</span>
        </li>
      </ul>
    </div>
  );
}
