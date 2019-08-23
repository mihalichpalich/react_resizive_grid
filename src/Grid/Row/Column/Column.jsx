import React from "react";
import $ from "jquery";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnWidth: "33%",
      columnHeight: "200px",
      columnResize: null
    };
    this.initResize = this.initResize.bind(this);
    this.resize = this.resize.bind(this);
    this.stopResize = this.stopResize.bind(this);
  }

  initResize(e) {
    e.preventDefault();

    this.setState({
      columnResize: e.target.parentNode
    });

    $(window).bind("mousemove", this.resize);
    $(window).bind("mouseup", this.stopResize);
  }

  resize(e) {
    if (this.state.columnResize == null) {
      return;
    }

    let columnResizeWidth = this.state.columnResize.style.width;
    let columnResizeHeight = this.state.columnResize.style.height;

    columnResizeWidth =
      e.clientX - this.state.columnResize.offsetLeft + 10 + "px";
    columnResizeHeight =
      e.clientY - this.state.columnResize.offsetTop + 10 + "px";

    this.setState({
      columnWidth: columnResizeWidth,
      columnHeight: columnResizeHeight
    });
  }

  stopResize() {
    this.setState({
      columnResize: null
    });

    $(window).unbind("mousemove", this.resize);
    $(window).unbind("mouseup", this.stopResize);
  }

  render() {
    const ColumnStyles = {
      columnStyle: {
        display: "flex",
        boxSizing: "border-box",
        position: "relative",
        width: this.state.columnWidth,
        height: this.state.columnHeight,
        backgroundColor: "lightblue",
        border: "1px solid black"
      },
      spanStyle: {
        display: "inline-block",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        cursor: "se-resize"
      }
    };

    return (
      <div className="column" style={ColumnStyles.columnStyle}>
        ширина {this.state.columnWidth} <br />
        высота {this.state.columnHeight}
        <span
          className="resizer"
          style={ColumnStyles.spanStyle}
          onMouseDown={this.initResize}
        ></span>
      </div>
    );
  }
}

export default Column;
