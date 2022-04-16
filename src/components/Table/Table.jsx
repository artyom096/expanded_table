import React from "react";
import "./TableStyles.scss";
import Select from "../Select";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

const Table = () => {
  const [isActive, setIsActive] = React.useState(false);

  const chooseSelectAction = (e) => setIsActive(e.target.value);

  return (
    <React.Fragment>
      <Select chooseSelectAction={chooseSelectAction} />
      <div className="table">
        <TableHeader />
        <TableBody isActive={isActive} />
      </div>
    </React.Fragment>
  );
};

export default Table;
