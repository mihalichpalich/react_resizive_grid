import React from "react";

import Column from "./Column/Column.jsx";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rowStyles = {
      display: "flex",
      backgroundColor: "green",
      minHeight: "200px",
      width: "100%"
    };

    let columns = [];

    for (let i = 0; i < 2; i++) {
      columns.push(<Column key={i} />);
    }

    return (
      <div className="row" style={rowStyles}>
        {columns}
      </div>
    );
  }
}

export default Row;
