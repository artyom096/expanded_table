import React from "react";
import data from "../../data.json";
import Row from "../Row/Row";

const TableBody = ({ isActive }) => {
  const [filteredData, setFilteredData] = React.useState([]);
  const [expandedClients, setExpandedClients] = React.useState({});

  React.useEffect(() => {
    checkChildrenAndActive();
  }, [isActive]);

  const checkChildrenAndActive = () => {
    const copyClients = isActive
      ? data.filter((item) =>
          isActive === "true" ? item.isActive : !item.isActive
        )
      : [...data];
    const clientsChildrenCount = {};

    copyClients.forEach((user) => {
      clientsChildrenCount[user.id] = user;
      user.children = [];
    });

    for (let i = 0; i < copyClients.length; i++) {
      const user = copyClients[i];
      if (user.parentId && clientsChildrenCount[user.parentId]) {
        clientsChildrenCount[user.parentId].children.push(
          copyClients.splice(i, 1)[0]
        );
        i--;
      }
    }

    setFilteredData(copyClients);
  };

  const renderChildrenRow = (row) => {
    if (row.children.length) {
      return (
        <React.Fragment key={row.id}>
          {renderRow(row)}
          {row.children.map((child) => renderChildrenRow(child))}
        </React.Fragment>
      );
    }
    return renderRow(row);
  };

  const renderRow = (row) => {
    return (
      <Row
        row={row}
        key={row.id}
        handleRowClick={handleRowClick}
        className={visibilityOfRow(row.parentId)}
      />
    );
  };

  const handleRowClick = (rowId) => {
    const copyClients = { ...expandedClients };
    copyClients[rowId]
      ? delete copyClients[rowId]
      : (copyClients[rowId] = data.filter((client) => client.id === rowId)[0]);

    setExpandedClients(copyClients);
  };

  const visibilityOfRow = (parentId, parentClass) => {
    return Object.keys(expandedClients).includes(String(parentId))
      ? parentClass
        ? ""
        : "row_child_expand"
      : "row_hidden";
  };

  return filteredData.map((clients) => {
    return (
      <React.Fragment key={clients.id}>
        <Row className="row" handleRowClick={handleRowClick} row={clients} />
        {clients.children[0] &&
          clients.children.map((item) => {
            return (
              <div
                key={item.id}
                className={visibilityOfRow(item.parentId, true)}
              >
                {renderChildrenRow(item)}
              </div>
            );
          })}
      </React.Fragment>
    );
  });
};

export default TableBody;
