import "./SignupBar.css";
import useSignup from "../../Hooks/useSignup";
import { Numbers } from "../../Utils/numberOptionUtil";

const GradeDataForm = () => {
  const { selectOnChange } = useSignup();

  return (
    <div id="signupBar-selects-wrap">
      <select
        name="grade"
        className="signupBar-grades-select"
        placeholder="학년"
        onChange={selectOnChange}
      >
        <option value="1" className="signupBar-grade-select">
          1학년
        </option>
        <option value="2" className="signupBar-grade-select">
          2학년
        </option>
        <option value="3" className="signupBar-grade-select">
          3학년
        </option>
      </select>
      <select
        name="group"
        className="signupBar-classes-select"
        placeholder="반"
        onChange={selectOnChange}
      >
        <option value="1" className="signupBar-class-select">
          1반
        </option>
        <option value="2" className="signupBar-class-select">
          2반
        </option>
        <option value="3" className="signupBar-class-select">
          3반
        </option>
      </select>
      <select
        name="number"
        onChange={selectOnChange}
        className="signupBar-numbers-select"
        placeholder="번호"
      >
        {Numbers(20, "signupBar-number-select")}
      </select>
    </div>
  );
};

export default GradeDataForm;
