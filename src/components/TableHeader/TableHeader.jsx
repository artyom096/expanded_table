import React from "react";
import "./TableHeaderStyles.scss";

const TableHeader = () => {
  return (
    <div className="table_header">
      <div className="cell">id</div>
      <div className="cell">name</div>
      <div className="cell">balance</div>
      <div className="cell">isActive</div>
      <div className="cell">email</div>
    </div>
  );
};

export default TableHeader;
