import React from "react";

import Column from "./Column/Column.jsx";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowMinHeight: "200px",
      rowMaxHeight: "auto"
    };
    this.changeRowHeight = this.changeRowHeight.bind(this);
  }

  changeRowHeight(data) {
    this.setState({
      rowMaxHeight: data,
      rowMinHeight: data
    });
  }

  render() {
    const rowStyles = {
      display: "flex",
      backgroundColor: "green",
      minHeight: this.state.rowMinHeight,
      maxHeight: this.state.rowMaxHeight,
      width: "100%"
    };

    let columns = [];

    for (let i = 0; i < 2; i++) {
      columns.push(<Column key={i} heightFromColumn={this.changeRowHeight} />);
    }

    return (
      <div className="row" style={rowStyles}>
        {columns}
      </div>
    );
  }
}

export default Row;
