import React from "react";
import $ from "jquery";

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnWidth: "50%",
      columnOldWidthPx: null,
      columnHeight: "auto",
      columnResize: null,
      columnOldWidth: null,
      columnNewWidth: null,
      columnFlexGrow: 1
    };
    this.initResize = this.initResize.bind(this);
    this.resize = this.resize.bind(this);
    this.stopResize = this.stopResize.bind(this);
  }

  componentDidMount() {
    let columnOldWidthPxVar = $(".column").width();

    this.setState({
      columnOldWidthPx: columnOldWidthPxVar
    });
  }

  initResize(e) {
    e.preventDefault();

    this.setState({
      columnResize: e.target.parentNode,
      columnOldWidth: this.state.columnWidth
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

    let newFlexGrow =
      (e.clientX - this.state.columnResize.offsetLeft + 10) /
      this.state.columnOldWidthPx;

    this.setState({
      columnWidth: columnResizeWidth,
      columnHeight: columnResizeHeight,
      columnNewWidth: columnResizeWidth,
      columnFlexGrow: newFlexGrow
    });

    this.props.heightFromColumn(this.state.columnHeight);
  }

  stopResize() {
    this.setState({
      columnResize: null,
      columnHeight: "auto"
    });

    $(window).unbind("mousemove", this.resize);
    $(window).unbind("mouseup", this.stopResize);
  }

  render() {
    const columnStyles = {
      columnStyle: {
        flexGrow: this.state.columnFlexGrow,
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
      <div className="column" style={columnStyles.columnStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          doloribus quia facilis odit voluptas perspiciatis ratione voluptate
          dolore adipisci odio, dolorum numquam ducimus porro totam perferendis
          saepe in quos rem possimus reiciendis nam accusamus! Nemo commodi
          natus corrupti ullam eos aspernatur animi officia quod. Dignissimos,
          odio. Dolores doloribus laboriosam, tempora nobis inventore dicta
          vitae eum, aspernatur temporibus perferendis sequi qui earum aliquid?
          Ullam ipsam voluptates neque soluta sunt nostrum nihil!
        </p>
        <span
          className="resizer"
          style={columnStyles.spanStyle}
          onMouseDown={this.initResize}
        ></span>
      </div>
    );
  }
}

export default Column;
