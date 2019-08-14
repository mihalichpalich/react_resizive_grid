import React from "react";
import $ from "jquery";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnWidth: "33%",
      columnHeight: "300px",
      originalWidth: 0,
      originalHeight: 0,
      originalX: 0,
      originalY: 0,
      originalMouseX: 0,
      originalMouseY: 0
    };
    this.initResize = this.initResize.bind(this);
    this.getSize = this.getSize.bind(this);
    this.resize = this.resize.bind(this);
    this.stopResize = this.stopResize.bind(this);
  }

  initResize() {
    $(".resizer").bind("mousedown", this.getSize);
  }

  getSize(e) {
    e.preventDefault();
    this.setState({
      originalWidth: $(".column").width(),
      originalHeight: $(".column").height(),
      originalX: $(".column")
        .get(0)
        .getBoundingClientRect().left,
      originalY: $(".column")
        .get(0)
        .getBoundingClientRect().top,
      originalMouseX: e.pageX,
      originalMouseY: e.pageY
    });
    $(window).bind("mousemove", this.resize);
    $(window).bind("mouseup", this.stopResize);
  }

  resize(e) {
    const actualWidth =
      this.state.originalWidth + (e.pageX - this.state.originalMouseX);
    const actualHeight =
      this.state.originalHeight + (e.pageY - this.state.originalMouseY);
    if (actualWidth > 0) {
      this.setState({
        columnWidth: actualWidth
      });
    }
    if (actualHeight > 0) {
      this.setState({
        columnHeight: actualHeight
      });
    }
  }

  stopResize() {
    $(window).unbind("mousemove", this.resize);
  }

  render() {
    const ColumnStyles = {
      columnStyle: {
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
        backgroundColor: "red"
      }
    };

    return (
      <div className="column" style={ColumnStyles.columnStyle}>
        ширина {this.state.columnWidth} <br />
        высота {this.state.columnHeight}
        <span
          className="resizer"
          style={ColumnStyles.spanStyle}
          onMouseOver={this.initResize}
        ></span>
      </div>
    );
  }
}

export default Column;
