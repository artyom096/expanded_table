import React from "react";
import "./SelectStyles.scss";

const Select = ({ chooseSelectAction }) => {
  return (
    <div className="select">
      <label>
        <span>isActive:</span>&nbsp;
        <select onChange={chooseSelectAction}>
          <option value="">Choose option</option>
          <option value="true">True</option>
          <option value="false">False</option>
          <option value="">Any action</option>
        </select>
      </label>
    </div>
  );
};

export default Select;
