import React from 'react';
import $ from "jquery";

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnWidth: '50%',
            columnHeight: '300px'
        }
        this.initResize = this.initResize.bind(this);
        this.resize = this.resize.bind(this);
        this.stopResize = this.stopResize.bind(this);
    }

    initResize() {
        $(window).bind('mousemove', this.resize);
        $(window).bind('mouseup', this.stopResize);
    }

    resize(e) {
        let newColumnWidth = (e.clientX - $(".column").offset().left);
        let newColumnHeight = (e.clientY - $(".column").offset().top);

        this.setState({
            columnWidth: newColumnWidth,
            columnHeight: newColumnHeight
        });
    }

    stopResize() {
        $(window).unbind('mousemove', this.resize);
        $(window).unbind('mouseup', this.stopResize);
    }

    render() {
        const ColumnStyles = {
            columnStyle: {
                boxSizing: 'border-box',
                position: 'relative',
                width: this.state.columnWidth,
                height: this.state.columnHeight,
                backgroundColor: 'lightblue',
                border: '1px solid black'
            },
            spanStyle: {
                display: 'inline-block',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '20px',
                height: '20px',
                backgroundColor: 'red'
            }
        };

        return (
            <div className="column" style={ColumnStyles.columnStyle}>
                ширина {this.state.columnWidth} <br/>
                высота {this.state.columnHeight}
             	<span style={ColumnStyles.spanStyle} onMouseDown={this.initResize}></span>
            </div>
        )
    }
}

export default Column;