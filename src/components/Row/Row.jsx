import React from "react";
import "./RowStyles.scss";

const Row = ({ row, className, handleRowClick }) => {
  return (
    <div
      key={row.id}
      onClick={() => handleRowClick(row.id)}
      className={className}
    >
      <div className="cell">{row.id}</div>
      <div className="cell">{row.name}</div>
      <div className="cell">{row.balance}</div>
      <div className="cell">{`${row.isActive}`}</div>
      <div className="cell">{row.email}</div>
    </div>
  );
};

export default Row;
