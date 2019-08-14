import React from "react";

import Column from "./Column/Column.jsx";

class Row extends React.Component {
  render() {
    const RowStyles = {
      display: "flex",
      alignItems: "stretch",
      width: "100%"
    };

    return (
      <div style={RowStyles}>
        <Column />
        <Column />
      </div>
    );
  }
}

export default Row;
